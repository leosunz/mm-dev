import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetTimeAvailableComponent } from './set-time-available.component';

const routes: Routes = [{ path: '', component: SetTimeAvailableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetTimeAvailableRoutingModule {}
