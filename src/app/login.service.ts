import { Injectable } from '@angular/core';
import {Http,  Headers} from '@angular/http';
import 'rxjs/add/operator/map';
const BASE_URL = 'http://localhost:3000/users';
const BASE_UPDATE_URL = 'http://localhost:3000/users/';
const header = {headers : new Headers({'Content-type' : 'application/json'})};

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get(BASE_URL)
      .map(res => res.json());
  }

  postData(data) {
    return this.http.post(BASE_URL, data, header)
      .map(res => res.json());
  }

  updateData(data) {
    return this.http.patch(`${BASE_UPDATE_URL}${data.id}`, data, header)
      .map(res => res.json());
  }

}
