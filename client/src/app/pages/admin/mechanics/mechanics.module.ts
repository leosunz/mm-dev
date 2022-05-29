import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MechanicsRoutingModule } from './mechanics-routing.module';
import { MechanicsComponent } from './mechanics.component';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
} from '@angular/material';
import { MechanicListComponent } from './components/mechanic-list/mechanic-list.component';

@NgModule({
  declarations: [MechanicsComponent, MechanicListComponent],
  imports: [
    CommonModule,
    MechanicsRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MechanicsModule {}
