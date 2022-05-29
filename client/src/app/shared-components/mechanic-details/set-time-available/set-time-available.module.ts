import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetTimeAvailableRoutingModule } from './set-time-available-routing.module';
import { SetTimeAvailableComponent } from './set-time-available.component';
import { MatButtonModule, MatFormFieldModule } from '@angular/material';
import { TimeSelectorModule } from '../../../lib/time-selector/time-selector.module';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [SetTimeAvailableComponent],
  imports: [
    CommonModule,
    SetTimeAvailableRoutingModule,
    MatFormFieldModule,
    TimeSelectorModule,
    MatButtonModule,
    NgxJsonViewerModule,
  ],
})
export class SetTimeAvailableModule {}
