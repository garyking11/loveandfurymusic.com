import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HistoryComponent} from './history/history.component';
import {PressComponent} from './press/press.component';
import {SpecsComponent} from './specs/specs.component';
import {DemosComponent} from './demos/demos.component';
import {ListenComponent} from './listen/listen.component';
// import {ProjectsComponent} from "./projects/projects.component";
// import {ContactComponent} from "./contact/contact.component";
// import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
// import {BandsComponent} from "./bands/bands.component";
// import {LoginComponent} from "./login/login.component";
// import {GaryKingAudioComponent} from "./gary-king-audio/gary-king-audio.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'press', component: PressComponent},
  {path: 'specs', component: SpecsComponent},
  {path: 'listen', component: ListenComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'garykingaudio', component: GaryKingAudioComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {
}
