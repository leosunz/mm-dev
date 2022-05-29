import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTimeSlotComponent } from './select-time-slot.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
} from '@angular/material';

@NgModule({
  declarations: [SelectTimeSlotComponent],
  exports: [SelectTimeSlotComponent],
  imports: [CommonModule, MatFormFieldModule, MatButtonModule, MatIconModule],
})
export class SelectTimeSlotModule {}
