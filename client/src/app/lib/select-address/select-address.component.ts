import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location } from '@angular-material-extensions/google-maps-autocomplete';
import { geoToH3 } from 'h3-js';
import { MAP_PRECISION } from '../../core/config';
import PlaceResult = google.maps.places.PlaceResult;

export interface LocationExtended extends Location {
  geohash: string;
}

@Component({
  selector: 'mm-select-address',
  templateUrl: './select-address.component.html',
  styleUrls: ['./select-address.component.scss'],
})
export class SelectAddressComponent {
  @Input() value;
  @Output() locationChange = new EventEmitter<LocationExtended>();
  @Output() addressChange = new EventEmitter<string>();

  public longitude: number;
  public fg: FormGroup;

  constructor() {}

  onAutocompleteSelected(result: PlaceResult) {
    this.addressChange.emit(result.formatted_address);
  }

  onLocationSelected(location: LocationExtended) {
    location = {
      ...location,
      geohash: geoToH3(location.latitude, location.longitude, MAP_PRECISION),
    };

    return this.locationChange.emit(location);
  }
}
