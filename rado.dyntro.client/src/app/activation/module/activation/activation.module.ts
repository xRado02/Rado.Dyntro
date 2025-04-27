import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationRoutingModule } from '../activation/activation-routing.module';
import { ActivateAccountFormComponent } from '../../activate-account-form/activate-account-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ActivateAccountFormComponent],
  imports: [
    CommonModule,
    ActivationRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActivationModule { }
