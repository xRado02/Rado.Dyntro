import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component'
import { DashboardComponent } from '../../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationComponent } from '../../components/header/navigation/navigation.component';
import { OrdersComponent } from '../../components/main/orders/orders.component'



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersComponent
  ]
})
export class DashboardModule { }
