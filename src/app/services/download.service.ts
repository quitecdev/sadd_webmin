import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';
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

	getPdfDocument(){
		return this._http.get(this.url + 'download',{responseType: "blob" });
	}
}
