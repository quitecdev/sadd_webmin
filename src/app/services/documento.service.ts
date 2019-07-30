import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Documento } from '../models/documento';
import { DocumentoPagi } from '../models/documentoPagi';
import { GLOBAL } from "./global";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  getDocumentoBusquedaRapida(palabra:string) {
    var user = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders({
      'Authorization' :'Bearer ' + user.token,
      'usr_cod':user.usrCod,
      'busqueda':palabra
    });
    return this._http.get(this.url + 'search/busquedarapida',{headers});
  }


  getDocumentoPagi(arcCod:string){
    var user = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders({
      'Authorization' :'Bearer ' + user.token,
      'arc_cod':arcCod,
    });
    return this._http.get(this.url + 'document',{headers});
  }

}
