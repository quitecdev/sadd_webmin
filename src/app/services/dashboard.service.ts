import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Dashboard } from '../models/dashboard';
import { GLOBAL } from "./global";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }


  getDashboard() {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders({
      'Authorization' :'Bearer ' + user.token
    });
    return this._http.get(this.url + 'dashboard',{headers});
  }

  getDocumentosRecientes() {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders({
      'Authorization' :'Bearer ' + user.token
    });
    return this._http.get(this.url + 'dashboard/documentosrecientes',{headers});
  }

}
