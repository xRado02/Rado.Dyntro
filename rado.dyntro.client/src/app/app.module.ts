import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common'; // Dodaj ten import

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }, // Dodaj ten dostawcę
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
