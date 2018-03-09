import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { CookieService } from './cookie.service';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseService {
  protected _url = environment.API;
  protected headers: any;

  constructor(private cookieService: CookieService) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    const token = this.cookieService.read('token');
    if (token) {
      this.headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `JWT ${token}`);
      
    }
  }

  protected getHeaders() {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    const token = this.cookieService.read('token');
    if (token) {
      this.headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `JWT ${token}`);
    }
      return { headers: this.headers };
    }
  

  protected handleError(error: any) {
    return Observable.throw(error.error);
  }
}

