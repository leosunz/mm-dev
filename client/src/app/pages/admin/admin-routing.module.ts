import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UrlService } from '../../core/services/url.service';

const routes: Routes = [
  {
    path: '',

    component: AdminComponent,
    children: [
      {
        path: 'mechanics',
        loadChildren: () =>
          import('./mechanics/mechanics.module').then(m => m.MechanicsModule),
      },
      {
        path: 'book-time',
        loadChildren: () =>
          import('./admin-book-time/admin-book-time.module').then(
            m => m.AdminBookTimeModule,
          ),
      },
      // {
      //   path: 'select-area',
      //   loadChildren: () =>
      //     import(
      //       './mechanics/mechanic-details/mechanic-map/mechanic-map.module'
      //     ).then(m => m.MechanicMapModule),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
