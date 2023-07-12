import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ROUTES} from './listen.routes';
import {ListenComponent} from './listen.component';

// import {YoutubeapiComponent} from "../youtubeapi/youtubeapi.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    ListenComponent,
    YoutubeapiComponent,
  ],
})
export class ListenModule {
}
