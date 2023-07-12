import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AboutComponent} from './about/about.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ContactComponent} from './contact/contact.component';
import {DemosComponent} from './demos/demos.component';
import {FooterComponent} from './footer/footer.component';
import {GalleryComponent} from './gallery/gallery.component';
import {HeaderComponent} from './header/header.component';
import {HistoryComponent} from './history/history.component';
import {HomeComponent} from './home/home.component';
import {ListenComponent} from './listen/listen.component';
import {LyricsComponent} from './lyrics/lyrics.component';
import {MerchComponent} from './merch/merch.component';
import {NavComponent} from './nav/nav.component';
import {NgwWowModule} from 'ngx-wow';
import {PressComponent} from './press/press.component';
import {PromoComponent} from './promo/promo.component';
import {SpecsComponent} from './specs/specs.component';

// import { MyParallaxDirectiveDirective } from './my-parallax-directive.directive';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    HistoryComponent,
    SpecsComponent,
    ContactComponent,
    DemosComponent,
    CalendarComponent,
    PressComponent,
    LyricsComponent,
    PromoComponent,
    ListenComponent,
    MerchComponent,
    GalleryComponent,
    // MyParallaxDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgwWowModule,
    // NgwWowModule,
  ],
  providers: [],

})

export class AppModule {
}
