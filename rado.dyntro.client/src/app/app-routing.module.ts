import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';

const routes: Routes = [

  { path: '', redirectTo: '/commercial', pathMatch: 'full' },
  { path: 'commercial', loadChildren: () => import('./commercial/modules/commercial/commercial.module').then(m => m.CommercialModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', component: CommercialComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
