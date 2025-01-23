import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './app-public/header/header.component'
import { MainComponent } from './app-public/main/main.component'
import { FooterComponent } from './app-public/footer/footer.component'
import { NavigationComponent } from './app-public/header/navigation/navigation.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionWelcomeComponent } from './app-public/main/section-welcome/section-welcome.component';
import { AppPublicComponent } from './app-public/app-public.component';
import { SectionBusinessInformationComponent } from './app-public/main/section-business-information/section-business-information.component';
import { SectionContactComponent } from './app-public/main/section-contact/section-contact.component';
import { SectionAboutUsComponent } from './app-public/main/section-about-us/section-about-us.component';
import { SectionColdMailingOfferComponent } from './app-public/main/section-cold-mailing-offer/section-cold-mailing-offer.component';
import { SectionLinkedinAutoOfferComponent } from './app-public/main/section-linkedin-auto-offer/section-linkedin-auto-offer.component';
import { SectionMajorComponent } from './app-public/main/section-major/section-major.component';
import { SectionClientsComponent } from './app-public/main/section-clients/section-clients.component';
import { SectionLoginComponent } from './app-public/main/section-login/section-login.component';
import { ClientPragmaGoComponent } from './app-public/main/section-specific-client/client-pragma-go/client-pragma-go.component';
import { ClientPersonnelServiceComponent } from './app-public/main/section-specific-client/client-personnel-service/client-personnel-service.component';
import { ClientArgentumEventComponent } from './app-public/main/section-specific-client/client-argentum-event/client-argentum-event.component';
import { ClientVendoriseComponent } from './app-public/main/section-specific-client/client-vendorise/client-vendorise.component';
import { AppPrivateComponent } from './app-private/app-private.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    SectionWelcomeComponent,    
    AppPublicComponent,
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
    AppPrivateComponent,


  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
