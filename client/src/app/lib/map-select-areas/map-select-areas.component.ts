import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { geoToH3, h3SetToMultiPolygon, h3ToGeoBoundary, polyfill } from 'h3-js';
import { MAP_PRECISION } from '../../core/config';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { BaseComponent } from '../../core/base-component';

declare const google: any;
// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
type GmPolygon = any;
type Longitude = number;
type Latitude = number;
export type GeohashId = string;
type AreaIdSet = GeohashId[];

type Point = [Longitude, Latitude];
type PolygonPoints = Point[];

@Component({
  selector: 'mm-map-select-areas',
  templateUrl: './map-select-areas.component.html',
  styleUrls: ['./map-select-areas.component.scss'],
})
export class MapSelectAreasComponent extends BaseComponent implements OnInit {
  @Output() hexagonsChanged = new EventEmitter<GeohashId[]>(null);
  @Input() prefilledHexagons$: Observable<GeohashId[]>; // = new BehaviorSubject<AreaIdSet>(null);
  prefilledHexagonsSnapshot: GeohashId[] = [];
  @Input() reset$ = new BehaviorSubject<true>(null);

  drawingManager;
  mapInstance;
  // These are polygons that are painted programmatically
  generatedPolygons = new BehaviorSubject<any[]>([]);

  // Specs of user created polygons
  userMadePolygons = new BehaviorSubject<GmPolygon[]>([]);
  userMadePolygonPoints: Observable<
    PolygonPoints[]
  > = this.userMadePolygons.pipe(
    map(polygons => polygons.map(polygon => this.getPolygonPaths(polygon))),
  );

  hexagonSets: Observable<AreaIdSet[]> = this.userMadePolygonPoints.pipe(
    map(polygonPoints =>
      polygonPoints.map(polygonPath => this.getHexagons(polygonPath)),
    ),
  );

  selectedHexagons = this.hexagonSets.pipe(
    map(hexagonSets => {
      const allHexagons = [];
      hexagonSets.forEach(hexagonSet => {
        hexagonSet.forEach(hexagon => {
          allHexagons.push(hexagon);
        });
      }, []);
      return allHexagons.filter(onlyUnique);
    }),
  );

  center: any = {
    lat: 59.8326394,
    lng: 17.6909676,
  };

  onMapReady(gmMap) {
    this.mapInstance = gmMap;
    this.initDrawingManager(gmMap);
  }

  initDrawingManager(gmMap: any) {
    const options = {
      drawingControl: false,
      drawingControlOptions: {
        drawingModes: ['polygon'],
      },
      polygonOptions: {
        draggable: false,
        editable: false,
        strokeColor: '#000000',
        strokeOpacity: 0.5,
        strokeWeight: 1.2,
        fillColor: '#000000',
        fillOpacity: 0.0,
      },
      drawingMode: google.maps.drawing.OverlayType.POLYGON,
    };

    // Docs: https://developers.google.com/maps/documentation/javascript/reference#DrawingManagerOptions
    this.drawingManager = new google.maps.drawing.DrawingManager(options);
    this.drawingManager.setMap(gmMap);

    google.maps.event.addListener(
      this.drawingManager,
      'polygoncomplete',
      polygon => {
        this.addUserMadePolygons(polygon);
      },
    );

    super.addSubs(
      this.prefilledHexagons$.pipe(filter(x => !!x)).subscribe(hexagons => {
        this.prefilledHexagonsSnapshot = hexagons;
        this.addPrefilledHexagons(hexagons);
      }),
    );

    super.addSubs(
      this.reset$.pipe(filter(x => !!x)).subscribe(() => {
        this.resetMap();
      }),
    );
  }

  addPrefilledHexagons(hexagons: AreaIdSet) {
    // console.log('this.prefilledHexagons', hexagons);
    if (!!hexagons) {
      console.log('set hexagons:', hexagons);

      /** The area might be divided into several, thus this.getHexagonsOutline wont work. Instead we print each hexagon individually */

      hexagons
        .map(hexagon => h3ToGeoBoundary(hexagon, false))
        .forEach(hexagonOutline =>
          this.drawGmPolygon(hexagonOutline as PolygonPoints, '#0000DD'),
        );
    }
  }

  addUserMadePolygons(polygon: GmPolygon) {
    this.userMadePolygons.next([...this.userMadePolygons.value, polygon]);
  }

  getPolygonPaths(polygon: GmPolygon): PolygonPoints {
    const vertices = polygon.getPaths().getArray()[0];
    const paths = [];
    vertices.getArray().forEach((xy, i) => {
      const latLng: Point = [xy.lat(), xy.lng()];
      paths.push(latLng);
    });

    return paths;
  }

  getHexagons(polygonPath: PolygonPoints): GeohashId[] {
    return polyfill(polygonPath, MAP_PRECISION, false);
  }

  drawGmPolygon(path: PolygonPoints, color = '#FF0000') {
    const points = [];
    path.forEach(pathPoint => {
      points.push({
        lat: pathPoint[0],
        lng: pathPoint[1],
      });
    });

    const gmPolygon = new google.maps.Polygon({
      paths: points,
      strokeColor: color,
      strokeOpacity: 0,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.35,
    });
    gmPolygon.setMap(this.mapInstance);
    this.generatedPolygons.next([...this.generatedPolygons.value, gmPolygon]);
  }

  getHexagonsOutline(hexagons: GeohashId[]) {
    return h3SetToMultiPolygon(hexagons, false);
  }

  constructor() {
    super();
    this.hexagonSets.subscribe(hexagonSets => {
      // Reset map before painting new:
      this.generatedPolygons.value.map(gmp => gmp.setMap(null));
      hexagonSets.forEach(hexagons => {
        const hexagonOutline = this.getHexagonsOutline(hexagons)[0][0];
        this.drawGmPolygon(hexagonOutline as PolygonPoints);
      });
    });

    this.selectedHexagons.subscribe(hexagons => {
      console.log('user made hexagons', hexagons);
      this.hexagonsChanged.emit(hexagons);
    });
  }

  ngOnInit(): void {
    console.log(geoToH3(59.8326394, 17.6909676, MAP_PRECISION));
  }

  resetMap() {
    this.userMadePolygons.value.forEach(polygon => polygon.setMap(null));
    this.userMadePolygons.next([]);
    this.addPrefilledHexagons(this.prefilledHexagonsSnapshot);
  }
}
