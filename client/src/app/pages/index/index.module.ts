import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HeroModule } from '../../lib/hero/hero.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectAddressModule } from '../../lib/select-address/select-address.module';
import { IndexSelectAddressComponent } from './index-select-address/index-select-address.component';
import { IndexSelectJobsComponent } from './index-select-jobs/index-select-jobs.component';
import { SelectJobsModule } from '../../shared-components/select-jobs/select-jobs.module';
import { IndexSelectDateComponent } from './index-select-date/index-select-date.component';
import { SelectTimeSlotModule } from '../../shared-components/select-time-slot/select-time-slot.module';
import { IndexHeroStartComponent } from './index-hero-start/index-hero-start.component';
import { IndexBookingDetailsComponent } from './index-booking-details/index-booking-details.component';
import { InfoBoxesComponent } from './info-boxes/info-boxes.component';
import { NotAvailableInYourAreaComponent } from './index-select-address/not-available-in-your-area/not-available-in-your-area.component';
import { StepByStepComponent } from './step-by-step/step-by-step.component';
import { IndexPaymentComponent } from './index-payment/index-payment.component';
import { IndexThankYouComponent } from './index-thank-you/index-thank-you.component';

@NgModule({
  declarations: [
    IndexComponent,
    IndexSelectAddressComponent,
    IndexSelectJobsComponent,
    IndexSelectDateComponent,
    IndexHeroStartComponent,
    IndexBookingDetailsComponent,
    InfoBoxesComponent,
    NotAvailableInYourAreaComponent,
    StepByStepComponent,
    IndexPaymentComponent,
    IndexThankYouComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IndexRoutingModule,
    HeroModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    SelectAddressModule,
    SelectJobsModule,
    SelectTimeSlotModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  entryComponents: [NotAvailableInYourAreaComponent],
})
export class IndexModule {}
