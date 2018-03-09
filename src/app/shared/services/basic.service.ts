import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { CookieService } from './cookie.service';
@Injectable()
export class BasicService extends BaseService {
    private apiURL = "http://localhost:3001";

constructor(private http: HttpClient) {
    super(new CookieService) 
 }

addgroup(value): any {
    console.log(value)
    return this.http.post(this.apiURL + "/api/mailerlite/addgroup", value);
    }

getgroup():any {
        return this.http.get(this.apiURL + "/api/groups/getgroup");
    }
    
 login(value): any {
        return this.http.post(this.apiURL + "/api/login", value,this.getHeaders());
    }

}