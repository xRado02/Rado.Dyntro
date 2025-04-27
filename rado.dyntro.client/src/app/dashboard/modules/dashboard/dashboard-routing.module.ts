import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../components/main/main.component';
import { DashboardComponent } from '../../dashboard.component';
import { OrdersFilterComponent } from '../../components/main/orders-filter/orders-filter.component'
import { AdminPanelComponent } from '../../components/main/admin-panel/admin-panel.component';
import { ProfileDetailsComponent } from '../../components/main/profile-details/profile-details.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'orders', component: OrdersFilterComponent },
      { path: 'admin-panel', component: AdminPanelComponent },
      { path: 'details', component: ProfileDetailsComponent}


    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
