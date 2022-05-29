import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSelectorComponent } from './time-selector.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [TimeSelectorComponent],
  exports: [TimeSelectorComponent],
  imports: [CommonModule, MatButtonModule],
})
export class TimeSelectorModule {}
