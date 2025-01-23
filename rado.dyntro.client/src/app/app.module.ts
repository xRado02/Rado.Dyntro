import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './commercial/header/header.component'
import { MainComponent } from './commercial/main/main.component'
import { FooterComponent } from './commercial/footer/footer.component'
import { NavigationComponent } from './commercial/header/navigation/navigation.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionWelcomeComponent } from './commercial/main/section-welcome/section-welcome.component';
import { CommercialComponent } from './commercial/commercial.component';
import { SectionBusinessInformationComponent } from './commercial/main/section-business-information/section-business-information.component';
import { SectionContactComponent } from './commercial/main/section-contact/section-contact.component';
import { SectionAboutUsComponent } from './commercial/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from './commercial/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionLinkedinAutoOfferComponent } from './commercial/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from './commercial/main/section-major/section-major.component';
import { SectionClientsComponent } from './commercial/main/section-clients/section-clients.component';
import { SectionLoginComponent } from './commercial/main/section-login/section-login.component';
import { ClientPragmaGoComponent } from './commercial/main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientPersonnelServiceComponent } from './commercial/main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from './commercial/main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientVendoriseComponent } from './commercial/main/section-specific-client/client-vendorise/client-vendorise.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    SectionWelcomeComponent,    
    DashboardComponent,
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
    ClientVendoriseComponent,
    CommercialComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
