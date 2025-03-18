import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/commercial', pathMatch: 'full' },
  { path: 'commercial', loadChildren: () => import('./commercial/modules/commercial/commercial.module').then(m => m.CommercialModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', redirectTo: '/commercial', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Dodano { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
