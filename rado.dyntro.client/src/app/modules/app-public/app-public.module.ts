import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPublicRoutingModule } from '../app-public-routing/app-public-routing.module';
import { AppPublicComponent } from '../../app-public/app-public.component';
import { SectionAboutUsComponent } from '../../app-public/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from '../../app-public/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionContactComponent } from '../../app-public/main/section-contact/section-contact.component';
import { SectionLinkedinAutoOfferComponent } from '../../app-public/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from '../../app-public/main/section-major/section-major.component';
import { SectionClientsComponent } from '../../app-public/main/section-clients/section-clients.component';
import { SectionLoginComponent } from '../../app-public/main/section-login/section-login.component';
import { ClientPersonnelServiceComponent } from '../../app-public/main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from '../../app-public/main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientPragmaGoComponent } from '../../app-public/main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientVendoriseComponent } from '../../app-public/main/section-specific-client/client-vendorise/client-vendorise.component';
@NgModule({
  declarations: [
    AppPublicComponent,
    SectionMajorComponent,
    SectionAboutUsComponent,
    SectionColdMailingOfferComponent,
    SectionContactComponent,
    SectionClientsComponent,
    SectionLoginComponent,
    SectionLinkedinAutoOfferComponent,
    ClientPersonnelServiceComponent,
    ClientArgentumEventComponent,
    ClientPragmaGoComponent,
    ClientVendoriseComponent

  ],
  imports: [CommonModule, AppPublicRoutingModule],
})
export class AppPublicModule { }
