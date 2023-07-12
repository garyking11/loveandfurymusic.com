import {CommonModule} from '@angular/common';
// import {MyParallaxDirective} from './parallax.directive';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CalendarService} from '../calendar/calendar.service';
// import {ConfigService} from '../../assets/js/config.service';
// import {GalleryComponent} from "../gallery/gallery.component";
import {GalleryComponent} from '../gallery/gallery.component';
import {HomeComponent} from './home.component';
import {ROUTES} from './home.routes';
import {HomeService} from './home.service';

@NgModule({
  declarations: [HomeComponent, GalleryComponent], // MyParallaxDirective
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        // PressModule
    ],
    providers: [CalendarService, HomeService], // ConfigService
})
export class HomeModule {
}
