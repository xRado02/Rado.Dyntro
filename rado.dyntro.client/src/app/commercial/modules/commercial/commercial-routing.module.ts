import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from '../../commercial.component';
import { MainComponent } from '../../main/main.component';
import { SectionAboutUsComponent } from '../../main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from '../../main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionContactComponent } from '../../main/section-contact/section-contact.component';
import { SectionLinkedinAutoOfferComponent } from '../../main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from '../../main/section-major/section-major.component';
import { SectionClientsComponent } from '../../main/section-clients/section-clients.component';
import { SectionLoginComponent } from '../../main/section-login/section-login.component';
import { ClientPersonnelServiceComponent } from '../../main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from '../../main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientPragmaGoComponent } from '../../main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientVendoriseComponent } from '../../main/section-specific-client/client-vendorise/client-vendorise.component';
import { CookiesComponent } from '../../main/section-privacy-cookies/cookies/cookies.component';
import { PolityComponent } from '../../main/section-privacy-cookies/polity/polity.component';
import { ClientMojoHrComponent } from '../../main/section-specific-client/client-mojo-hr/client-mojo-hr.component';
import { ClientEwlComponent } from '../../main/section-specific-client/client-ewl/client-ewl.component';
import { ClientInnBenefitsComponent } from '../../main/section-specific-client/client-inn-benefits/client-inn-benefits.component';

const routes: Routes = [

  {
    path: '',
    component: CommercialComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'major', component: SectionMajorComponent },
      { path: 'about-us', component: SectionAboutUsComponent },
      { path: 'cold-mailing', component: SectionColdMailingOfferComponent },
      { path: 'contact', component: SectionContactComponent },
      { path: 'linkedin-auto', component: SectionLinkedinAutoOfferComponent },
      { path: 'clients', component: SectionClientsComponent },
      { path: 'login', component: SectionLoginComponent },
      { path: 'client-argentum-event', component: ClientArgentumEventComponent },
      { path: 'client-personnel-service', component: ClientPersonnelServiceComponent },
      { path: 'client-pragma-go', component: ClientPragmaGoComponent },
      { path: 'client-vendorise', component: ClientVendoriseComponent },
      { path: 'cookies', component: CookiesComponent },
      { path: 'polity', component: PolityComponent },
      { path: 'client-ewl', component: ClientEwlComponent },
      { path: 'client-inn-benefits', component: ClientInnBenefitsComponent },
      { path: 'client-mojo-hr', component: ClientMojoHrComponent }
    
    ]
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRoutingModule { }
