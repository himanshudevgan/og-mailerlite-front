import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';
import {CookieService} from './cookie.service';
import { Router} from '@angular/router';

@Injectable()
export class AuthService extends BaseService {
  token: string;
  response: any;
  constructor(public httpClient: HttpClient, private router: Router) {
    super(new CookieService);
  }

  login(credientials: any): any {
    const data = {
      email : credientials.email,
      password: credientials.password
    };
    return this.httpClient.post(`${this._url}login`, data, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  logout() {
    this.cookieService.delete('token');
    this.router.navigate(['/']);    
  }
}
