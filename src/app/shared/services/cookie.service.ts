import {Injectable} from '@angular/core';
import { environment } from '../../../environments/environment';
import * as crypto from 'crypto-js';
@Injectable()
export class CookieService {
  create(name: string, value: string, days: number = 1) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    value = this.encrypt(value);
    const expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
   
  }

  read(name: string) {
  
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c ? this.decrypt(c.substring(nameEQ.length, c.length)) : null;
      }
    }
    return null;
  }

  delete(name: string) {
    this.create(name, '', -1);
  }


     encrypt(text) {
      return crypto.AES.encrypt(text, environment.SECRET);
    }

  decrypt(text) {
    try {
      const bytes = crypto.AES.decrypt(text.toString(), environment.SECRET);
      return bytes.toString(crypto.enc.Utf8);
      
    } catch (err) {
      return err;
    }
  }
}
