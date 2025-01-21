import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPrivateComponent } from '../../app-private/app-private.component'
import { AppPrivateRoutingModule } from './app-private-routing.module';


@NgModule({
  declarations: [
    AppPrivateComponent 
  ],
  imports: [
    CommonModule,
    AppPrivateRoutingModule
  ]
})
export class AppPrivateModule { }
