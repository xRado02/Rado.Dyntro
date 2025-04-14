import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../components/main/main.component';
import { DashboardComponent } from '../../dashboard.component';
import { OrdersFilterComponent } from '../../components/main/orders-filter/orders-filter.component'
import { AdminPanelComponent } from '../../components/main/admin-panel/admin-panel.component';


const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'orders', component: OrdersFilterComponent },     
      { path: 'admin-panel', component: AdminPanelComponent }

    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
