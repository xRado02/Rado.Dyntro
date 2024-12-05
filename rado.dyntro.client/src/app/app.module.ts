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
import { AboutUsSectionComponent } from './main/about-us-section/about-us-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    WelcomeSectionComponent,
    AboutUsSectionComponent,

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
