import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DemosComponent} from './demos.component';
import {ROUTES} from './demos.routes';
import {DemosService} from './demos.service';

@NgModule({
  declarations: [
    DemosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
})
export class DemosModule {

}
