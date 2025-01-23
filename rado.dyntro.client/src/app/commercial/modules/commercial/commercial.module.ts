import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialRoutingModule } from './commercial-routing.module';
import { CommercialComponent } from '../../commercial.component';
import { HeaderComponent } from '../../header/header.component'
import { MainComponent } from '../../main/main.component'
import { FooterComponent } from '../../footer/footer.component'
import { NavigationComponent } from '../../header/navigation/navigation.component'
import { SectionWelcomeComponent } from '../../main/section-welcome/section-welcome.component';
import { SectionBusinessInformationComponent } from '../../main/section-business-information/section-business-information.component';
import { SectionContactComponent } from '../../main/section-contact/section-contact.component';
import { SectionAboutUsComponent } from '../../main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from '../../main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionLinkedinAutoOfferComponent } from '../../main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from '../../main/section-major/section-major.component';
import { SectionClientsComponent } from '../../main/section-clients/section-clients.component';
import { SectionLoginComponent } from '../../main/section-login/section-login.component';
import { ClientPragmaGoComponent } from '../../main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientPersonnelServiceComponent } from '../../main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from '../../main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientVendoriseComponent } from '../../main/section-specific-client/client-vendorise/client-vendorise.component';


@NgModule({
  declarations: [
    CommercialComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    SectionWelcomeComponent,
    SectionBusinessInformationComponent,
    SectionContactComponent,
    SectionAboutUsComponent,
    SectionColdMailingOfferComponent,
    SectionLinkedinAutoOfferComponent,
    SectionMajorComponent,
    SectionClientsComponent,
    SectionLoginComponent,
    ClientPragmaGoComponent,
    ClientPersonnelServiceComponent,
    ClientArgentumEventComponent,
    ClientVendoriseComponent
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule
  ],
  exports: [
    CommercialComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    SectionWelcomeComponent,
    SectionBusinessInformationComponent,
    SectionContactComponent,
    SectionAboutUsComponent,
    SectionColdMailingOfferComponent,
    SectionLinkedinAutoOfferComponent,
    SectionMajorComponent,
    SectionClientsComponent,
    SectionLoginComponent,
    ClientPragmaGoComponent,
    ClientPersonnelServiceComponent,
    ClientArgentumEventComponent,
    ClientVendoriseComponent
  ]

})
export class CommercialModule { }
