import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {CookieService} from '../services/cookie.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private cookieService: CookieService) {}

  canActivate() {
    const token = this.cookieService.read('token');
    if (token) {
      const role = this.cookieService.read('role');
      this.router.navigate(['/mailerlite']);
      return false;
    } else {
      return true;
    }
  }
}
