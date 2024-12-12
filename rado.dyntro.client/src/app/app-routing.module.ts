import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsSectionComponent } from './main/about-us-section/about-us-section.component';
import { ColdMailingOfferSectionComponent } from './main/cold-mailing-offer-section/cold-mailing-offer-section.component';
import { ContactSectionComponent } from './main/contact-section/contact-section.component';
import { LeadGenerationOfferSectionComponent } from './main/lead-generation-offer-section/lead-generation-offer-section.component';
import { LinkedinAutomatizationOfferSectionComponent } from './main/linkedin-automatization-offer-section/linkedin-automatization-offer-section.component';
import { MajorSectionComponent } from './main/major-section/major-section.component';  

const routes: Routes = [
  { path: '', redirectTo: '/major', pathMatch: 'full' }, 
  { path: 'major', component: MajorSectionComponent },  
  { path: 'about-us', component: AboutUsSectionComponent },
  { path: 'cold-mailing', component: ColdMailingOfferSectionComponent },
  { path: 'contact', component: ContactSectionComponent },
  { path: 'lead-generation', component: LeadGenerationOfferSectionComponent },
  { path: 'linkedin-automatization', component: LinkedinAutomatizationOfferSectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
