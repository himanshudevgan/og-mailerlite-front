import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {CookieService} from '../services/cookie.service';

@Injectable()
export class IsLoggedinGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate() {
    const token = this.cookieService.read('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
