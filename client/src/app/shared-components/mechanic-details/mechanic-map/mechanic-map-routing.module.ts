import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MechanicMapComponent } from './mechanic-map.component';

const routes: Routes = [{ path: '', component: MechanicMapComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicMapRoutingModule {}
