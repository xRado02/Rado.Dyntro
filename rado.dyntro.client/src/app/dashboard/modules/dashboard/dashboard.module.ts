import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from '../../components/main/main.component';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationComponent } from '../../components/header/navigation/navigation.component';
import { OrdersFilterComponent } from '../../components/main/orders-filter/orders-filter.component';
import { OrdersComponent } from '../../components/main/orders/orders.component';

import { OrderService } from '../../Services/order.service';
import { OrderFormComponent } from '../../components/main/order-form/order-form.component';
import { AdminPanelComponent } from '../../components/main/admin-panel/admin-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../Services/user.service';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersFilterComponent,
    OrdersComponent,
    OrderFormComponent,
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [OrderService, UserService],
  exports: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersFilterComponent,
    OrdersComponent,
    OrderFormComponent,
    AdminPanelComponent
   

  ]
})
export class DashboardModule { }
