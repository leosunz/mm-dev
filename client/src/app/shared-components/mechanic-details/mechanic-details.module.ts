import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicDetailsRoutingModule } from './mechanic-details-routing.module';
import { MechanicDetailsComponent } from './mechanic-details.component';
import {
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
} from '@angular/material';
import { MechanicDetailsService } from './mechanic-details.service';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';
import { MechanicProfileFormModule } from '../mechanic-profile-form/mechanic-profile-form.module';

@NgModule({
  declarations: [MechanicDetailsComponent, MechanicProfileComponent],
  imports: [
    CommonModule,
    MechanicDetailsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,

    MechanicProfileFormModule,
  ],
  providers: [MechanicDetailsService],
})
export class MechanicDetailsModule {}
