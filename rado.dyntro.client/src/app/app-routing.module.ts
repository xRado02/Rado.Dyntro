import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAboutUsComponent } from './app-public/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from './app-public/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionContactComponent } from './app-public/main/section-contact/section-contact.component';
import { SectionLeadGenerationOfferComponent } from './app-public/main/section-lead-generation-offer/section-lead-generation-offer.component';
import { SectionLinkedinAutoOfferComponent } from './app-public/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from './app-public/main/section-major/section-major.component';  
import { SectionClientsComponent } from './app-public/main/section-clients/section-clients.component';
import { SectionLoginComponent } from './app-public/main/section-login/section-login.component';
import { ClientPersonnelServiceComponent } from './app-public/main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from './app-public/main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientPragmaGoComponent } from './app-public/main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientVendoriseComponent } from './app-public/main/section-specific-client/client-vendorise/client-vendorise.component';

const routes: Routes = [
  { path: '', redirectTo: '/major', pathMatch: 'full' }, 
  { path: 'major', component: SectionMajorComponent },  
  { path: 'about-us', component: SectionAboutUsComponent },
  { path: 'cold-mailing', component: SectionColdMailingOfferComponent },
  { path: 'contact', component: SectionContactComponent },
  { path: 'lead-generation', component: SectionLeadGenerationOfferComponent },
  { path: 'linkedin-auto', component: SectionLinkedinAutoOfferComponent },
  { path: 'clients', component: SectionClientsComponent },
  { path: 'client-argentum-event', component: ClientArgentumEventComponent },
  { path: 'client-personnel-service', component: ClientPersonnelServiceComponent },
  { path: 'client-pragma-go', component: ClientPragmaGoComponent },
  { path: 'client-vendorise', component: ClientVendoriseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
