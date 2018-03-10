import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BaseService } from './base.service';
import { CookieService } from './cookie.service';
import { Group } from '../interfaces/group';
import { Field } from '../interfaces/fields';

@Injectable()
export class GroupService extends BaseService {
  groups: BehaviorSubject<Group> = new BehaviorSubject<Group>(null);
  fields: BehaviorSubject<Field> = new BehaviorSubject<Field>(null);
  constructor(public httpClient: HttpClient) {
    super(new CookieService);
  }

  getGroup(): any {
    return this.httpClient.get(`${this._url}groups/getgroup`, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }
  getField(): any {
    return this.httpClient.get(`${this._url}groups/getfield`, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  setGroup(groups) {
    this.groups.next(groups);
  }
  setField(Field) {
    this.fields.next(Field);
  }

  addGroup(group) {
    return this.httpClient.post(`${this._url}mailerlite/addgroup`, group, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }
  addField(field) {
    return this.httpClient.post(`${this._url}mailerlite/addfield`, field, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }

  deleteGroup(id): any {
    return this.httpClient.put(`${this._url}groups/deletegroup/${id}`, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }
  deleteField(id): any {
    return this.httpClient.put(`${this._url}groups/deletefield/${id}`, this.getHeaders())
      .map(this.extractData)
      .catch(this.handleError);
  }
}
