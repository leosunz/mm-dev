import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UrlService } from './core/services/url.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [UrlService],
    runGuardsAndResolvers: 'always',
    loadChildren: () =>
      import('./pages/index/index.module').then(m => m.IndexModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
