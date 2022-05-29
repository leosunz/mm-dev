import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectJobsComponent } from './select-jobs.component';
import {
  MatButtonModule,
  MatChipsModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [SelectJobsComponent],
  imports: [CommonModule, MatButtonModule, MatListModule, MatChipsModule],
  exports: [SelectJobsComponent],
})
export class SelectJobsModule {}
