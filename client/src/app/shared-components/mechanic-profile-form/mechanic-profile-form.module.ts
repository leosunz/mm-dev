import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicProfileFormComponent } from './mechanic-profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
} from '@angular/material';

@NgModule({
  declarations: [MechanicProfileFormComponent],
  exports: [MechanicProfileFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [MechanicProfileFormComponent],
})
export class MechanicProfileFormModule {}
