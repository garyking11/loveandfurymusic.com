import { Component } from '@angular/core';
import {NgwWowService} from 'ngx-wow';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.less'],
  templateUrl: './app.component.html',

})
export class AppComponent {
  public title = 'loveandfurymusic';

  constructor(private wowService: NgwWowService) {
    // this.wowService.init();
  }

}
