import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { ProductsSectionComponent } from './products-section/products-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingBannerComponent,
    ProductsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
