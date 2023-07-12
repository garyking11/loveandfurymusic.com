import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// import {Page} from '../page/page';

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.css'],
  templateUrl: './nav.component.html',

})
export class NavComponent implements OnInit {

  public page: string;
  public slug: string;
  public url: string;
  public isActive: boolean;
  public title: string;
  public router;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private _router: Router) {
    this.router = _router;
  }

  public ngOnInit(): void {
    // get slug from url
/*    this.url = this.router.url;
    this.slug = this.url.replace(/^\/|\/$/g, '');
    // console.log(this.slug);
    this.getPage(this.slug);*/
  }

  /**
   * Get page data from ../../data/page.json
   * @param slug
   */
/*  public getPage(slug) {

    this.http
      .get<Page>('https://loveandfurymusic.com/api/page/' + slug.toLowerCase())
      .subscribe((page) => {
        this.isActive = page.isActive;
        this.slug = page.slug;
        this.url = page.url;
        // console.log(page);
      });
  }*/

}
