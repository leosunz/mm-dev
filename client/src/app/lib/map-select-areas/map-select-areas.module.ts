import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSelectAreasComponent } from './map-select-areas.component';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [MapSelectAreasComponent],
  exports: [MapSelectAreasComponent],
  imports: [CommonModule, AgmCoreModule, MatButtonModule],
})
export class MapSelectAreasModule {}
