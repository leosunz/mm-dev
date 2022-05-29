import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicMapRoutingModule } from './mechanic-map-routing.module';
import { MechanicMapComponent } from './mechanic-map.component';
import { AgmCoreModule } from '@agm/core';
import { MapSelectAreasModule } from '../../../lib/map-select-areas/map-select-areas.module';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [MechanicMapComponent],
  imports: [
    CommonModule,
    MechanicMapRoutingModule,
    MapSelectAreasModule,
    MatButtonModule,
  ],
})
export class MechanicMapModule {}
