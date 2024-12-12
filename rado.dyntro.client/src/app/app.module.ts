import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component'
import { MainComponent } from './main/main.component'
import { FooterComponent } from './footer/footer.component'
import { NavigationComponent } from './header/navigation/navigation.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeSectionComponent } from './main/welcome-section/welcome-section.component';
import { AppLayoutComponentComponent } from './app-layout-component/app-layout-component.component';
import { BusinessInformationSectionComponent } from './main/business-information-section/business-information-section.component';
import { ContactSectionComponent } from './main/contact-section/contact-section.component';
import { AboutUsSectionComponent } from './main/about-us-section/about-us-section.component';
import { ColdMailingOfferSectionComponent } from './main/cold-mailing-offer-section/cold-mailing-offer-section.component';
import { LinkedinAutomatizationOfferSectionComponent } from './main/linkedin-automatization-offer-section/linkedin-automatization-offer-section.component';
import { LeadGenerationOfferSectionComponent } from './main/lead-generation-offer-section/lead-generation-offer-section.component';
import { MajorSectionComponent } from './main/major-section/major-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    WelcomeSectionComponent,    
    AppLayoutComponentComponent,
    BusinessInformationSectionComponent,
    ContactSectionComponent,
    AboutUsSectionComponent,
    ColdMailingOfferSectionComponent,
    LinkedinAutomatizationOfferSectionComponent,
    LeadGenerationOfferSectionComponent,
    MajorSectionComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
