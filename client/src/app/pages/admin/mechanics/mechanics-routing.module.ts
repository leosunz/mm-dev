import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBookTimeComponent } from '../admin-book-time/admin-book-time.component';
import { MechanicsComponent } from './mechanics.component';

const routes: Routes = [
  {
    path: '',
    component: MechanicsComponent,
    children: [
      {
        path: 'details',
        loadChildren: () =>
          import(
            '../../../shared-components/mechanic-details/mechanic-details.module'
          ).then(m => m.MechanicDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MechanicsRoutingModule {}
