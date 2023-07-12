import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from './gallery.routes';

import {GalleryComponent} from './gallery.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
})
export class GalleryModule {
}
