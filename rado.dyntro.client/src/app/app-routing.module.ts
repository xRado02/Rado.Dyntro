import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./module/app-public/app-public.module').then(
        (m) => m.AppPublicModule
      ),
  },
  {
    path: 'private',
    loadChildren: () =>
      import('./module/app-private/app-private.module').then(
        (m) => m.AppPrivateModule
      ),
  },

  { path: '', redirectTo: '/public', pathMatch: 'full' },
  { path: '**', redirectTo: '/public' }, 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
