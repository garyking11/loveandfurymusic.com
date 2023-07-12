import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SpecsComponent} from './specs.component';
import {ROUTES} from './specs.routes';

@NgModule({
  declarations: [SpecsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [],
})
export class SpecsModule {
}
