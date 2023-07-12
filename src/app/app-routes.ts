//import {Routes} from '@angular/router';
// import {AuthGuard} from "./auth/auth.guard";
// import {CallbackComponent} from "./auth/callback.component";

export const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  /*{
    path: 'callback',
    // component: CallbackComponent
  },*/
  /*{
    path: 'upload',
    loadChildren: './multipart-uploader/multipart-uploader.module#MultipartUploaderModule'
  },*/
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'lyrics',
    loadChildren: './lyrics/lyrics.module#LyricsModule',
  },
  {
    path: 'specs',
    loadChildren: './specs/specs.module#SpecsModule',
  },
  {
    path: 'listen',
    loadChildren: './listen/listen.module#ListenModule',
  },
  /*{
    path: 'gallery',
    loadChildren: './gallery/gallery.module#GalleryModule'
  },*/

  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarModule',
  },
  /*{
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  },*/
  {
    path: 'contact',
    loadChildren: './contact/contact.module#ContactModule',
  },
  {
    path: 'history',
    loadChildren: './history/history.module#HistoryModule',
  },
  /*{
    path: 'login',
    loadChildren: './auth/login/login.module#LoginModule'
  },*/
  /*{
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule'
  },*/
  {
    path: 'promo',
    loadChildren: './promo/promo.module#PromoModule',
  },
  {
    path: 'press',
    loadChildren: './press-release/press.module#PressModule',
  },
  {
    path: 'demos',
    loadChildren: './demos/demos.module#DemosModule',
  },
/*  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [
      AuthGuard
    ]
  }*/
];
