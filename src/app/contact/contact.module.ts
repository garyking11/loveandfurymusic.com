import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ROUTES} from './contact.routes';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],

  // providers: [emailjs],

})
export class ContactModule {
}
