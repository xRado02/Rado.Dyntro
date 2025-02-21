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
import { ApiHandlerService } from '../../Services/api-handler.service';
import { OrderService } from '../../Services/order.service';

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersFilterComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,  
  ],
  providers: [ApiHandlerService, OrderService],
  exports: [
    DashboardComponent,
    MainComponent,
    HeaderComponent,
    NavigationComponent,
    OrdersFilterComponent,
    OrdersComponent
  ]
})
export class DashboardModule { }
