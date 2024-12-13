import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAboutUsComponent } from './app-public/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from './app-public/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionContactComponent } from './app-public/main/section-contact/section-contact.component';
import { SectionLeadGenerationOfferComponent } from './app-public/main/section-lead-generation-offer/section-lead-generation-offer.component';
import { SectionLinkedinAutoOfferComponent } from './app-public/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from './app-public/main/section-major/section-major.component';  

const routes: Routes = [
  { path: '', redirectTo: '/major', pathMatch: 'full' }, 
  { path: 'major', component: SectionMajorComponent },  
  { path: 'about-us', component: SectionAboutUsComponent },
  { path: 'cold-mailing', component: SectionColdMailingOfferComponent },
  { path: 'contact', component: SectionContactComponent },
  { path: 'lead-generation', component: SectionLeadGenerationOfferComponent },
  { path: 'linkedin-auto', component: SectionLinkedinAutoOfferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
