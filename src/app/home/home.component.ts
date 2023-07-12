import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  // styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  public pageId = 'home';
  public pageName = 'Welcome';
  constructor() { }

  public ngOnInit(): void {
  }

}
