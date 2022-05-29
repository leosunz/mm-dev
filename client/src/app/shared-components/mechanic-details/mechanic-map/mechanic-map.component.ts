import { Component, OnInit } from '@angular/core';
import { MechanicDetailsService } from '../mechanic-details.service';
import { GeohashId } from '../../../lib/map-select-areas/map-select-areas.component';
import { DbService } from '../../../core/services/db.service';
import { first, map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'mm-select-area',
  templateUrl: './mechanic-map.component.html',
  styleUrls: ['./mechanic-map.component.scss'],
})
export class MechanicMapComponent implements OnInit {
  geohashes$: Observable<GeohashId[]>;
  reset$ = new BehaviorSubject<true>(null);
  newAreas: GeohashId[] = [];

  constructor(
    public mechanicDetailsService: MechanicDetailsService,
    private dbService: DbService,
  ) {
    this.geohashes$ = this.mechanicDetailsService.mech.pipe(
      map(mech => mech.geohashes),
    );
  }

  ngOnInit() {}

  onHexagonsChanged(areaIds: GeohashId[]) {
    this.newAreas = areaIds;
  }

  save() {
    this.dbService
      .setGeohashes({
        id: this.mechanicDetailsService.mechSnapshot.id,
        geohashes: this.newAreas,
      })
      .subscribe(res => {
        return this.reset$.next(true);
      });
  }
}
