import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../components/main/main.component';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  //exports: [
  //  DashboardComponent,
  //  MainComponent, 
  //]
})
export class DashboardModule { }
