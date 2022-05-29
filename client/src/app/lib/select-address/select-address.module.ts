import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAddressComponent } from './select-address.component';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';

@NgModule({
  declarations: [SelectAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxJsonViewerModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatGoogleMapsAutocompleteModule,
  ],
  exports: [SelectAddressComponent],
})
export class SelectAddressModule {}
