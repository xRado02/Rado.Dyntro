import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPrivateComponent } from '../../app-private/app-private.component';

const routes: Routes = [

  {path:'', component: AppPrivateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppPrivateRoutingModule { }
