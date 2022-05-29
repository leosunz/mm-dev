import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBookTimeComponent } from './admin-book-time.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { SelectTimeSlotModule } from '../../../shared-components/select-time-slot/select-time-slot.module';
import { SelectJobsModule } from '../../../shared-components/select-jobs/select-jobs.module';
import { SelectAddressModule } from '../../../lib/select-address/select-address.module';

const routes: Routes = [{ path: '', component: AdminBookTimeComponent }];

@NgModule({
  declarations: [AdminBookTimeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    NgxJsonViewerModule,
    SelectTimeSlotModule,
    SelectJobsModule,
    SelectAddressModule,
  ],
  exports: [AdminBookTimeComponent],
})
export class AdminBookTimeModule {}
