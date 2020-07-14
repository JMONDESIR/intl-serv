import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PromoComponent } from './components/promo/promo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainDisplayComponent } from './components/main-display/main-display.component';
import { MainCarouselComponent } from './components/carousel/main-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PromoComponent,
    SubmenuComponent,
    NavigationComponent,
    ToolbarComponent,
    MainDisplayComponent,
    MainCarouselComponent,
  ],

  imports: [BrowserModule, BrowserAnimationsModule, NgbModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
