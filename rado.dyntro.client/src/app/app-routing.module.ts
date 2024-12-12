import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutUsSectionComponent } from './main/about-us-section/about-us-section.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about-us', component: AboutUsSectionComponent },
  { path: 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
