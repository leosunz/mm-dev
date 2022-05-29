import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBookTimeComponent } from '../../pages/admin/admin-book-time/admin-book-time.component';
import { MechanicDetailsComponent } from './mechanic-details.component';
import { MechanicProfileComponent } from './mechanic-profile/mechanic-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MechanicDetailsComponent,
    children: [
      {
        path: 'profile',
        component: MechanicProfileComponent,
      },
      {
        path: 'set-time-available',
        loadChildren: () =>
          import('./set-time-available/set-time-available.module').then(
            m => m.SetTimeAvailableModule,
          ),
      },
      {
        path: 'map',
        loadChildren: () =>
          import('./mechanic-map/mechanic-map.module').then(
            m => m.MechanicMapModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicDetailsRoutingModule {}
