// import {ConfigService} from '../../assets/js/config.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var $: any;

@Injectable()
export class HomeService {

  private serverPath: string;

  constructor(
    // public _http: HttpClient,
    // public configService: ConfigService,
    // private http:Http
  ) {
  }

 /* public getHomeData(): Observable<{ homepage: any[] }> {
    return this._http.get<{ homepage: any[] }>('https://loveandfurymusic.com/api/update-home');
  }*/
}
