import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';
import {CookieService} from './cookie.service';
import { Group } from '../interfaces/group';

@Injectable()
export class GroupService extends BaseService {
  groups: BehaviorSubject<Group> = new BehaviorSubject<Group>(null);
  constructor(public httpClient: HttpClient) {
    super(new CookieService);
  }

  getGroup(): any {
    return this.httpClient.get(`${this._url}groups/getgroup`, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  setGroup(groups) {
    this.groups.next(groups);
  }

  addGroup(group) {
    return this.httpClient.post(`${this._url}mailerlite/addgroup`, group, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }
}
