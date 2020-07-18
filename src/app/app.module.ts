import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromoComponent } from './components/promo/promo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PromoComponent,
    NavigationComponent,
    CarouselComponent,
  ],

  imports: [BrowserModule, BrowserAnimationsModule, NgbModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
