import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DocumentoPagi } from "../models/documentoPagi";
import { GLOBAL } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  public getPdfDocument(pagiSelect: DocumentoPagi[]): Observable<any> {
    // Create url
    var user = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + user.token,
      'Content-Type': 'application/json'
    });
    return this._http.post(this.url + 'download', pagiSelect, {
      responseType: "blob",
      headers
    });
  }
}
