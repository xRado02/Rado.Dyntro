import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./modules/app-public/app-public.module').then((m) => m.AppPublicModule),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./modules/app-private/app-private.module').then((m) => m.AppPrivateModule),
  },
  { path: '**', redirectTo: 'public' }, // Domyślne przekierowanie na /public
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
