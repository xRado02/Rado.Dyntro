import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionAboutUsComponent } from './commercial/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from './commercial/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionContactComponent } from './commercial/main/section-contact/section-contact.component';
import { SectionLinkedinAutoOfferComponent } from './commercial/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from './commercial/main/section-major/section-major.component';  
import { SectionClientsComponent } from './commercial/main/section-clients/section-clients.component';
import { SectionLoginComponent } from './commercial/main/section-login/section-login.component';
import { ClientPersonnelServiceComponent } from './commercial/main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from './commercial/main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientPragmaGoComponent } from './commercial/main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientVendoriseComponent } from './commercial/main/section-specific-client/client-vendorise/client-vendorise.component';

const routes: Routes = [
  { path: '', redirectTo: 'major', pathMatch: 'full' }, 
  { path: 'major', component: SectionMajorComponent },  
  { path: 'about-us', component: SectionAboutUsComponent },
  { path: 'cold-mailing', component: SectionColdMailingOfferComponent },
  { path: 'contact', component: SectionContactComponent },
  { path: 'linkedin-auto', component: SectionLinkedinAutoOfferComponent },
  { path: 'clients', component: SectionClientsComponent },
  { path: 'login', component: SectionLoginComponent},
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
