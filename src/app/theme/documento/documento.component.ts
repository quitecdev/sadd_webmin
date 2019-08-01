import { DocumentoPagi } from './../../models/documentoPagi';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DocumentoService } from "../../services/documento.service";


@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {


  loadingPagi = false;
  loadingView = false;

  imageView = '';
  error = '';

  paginas: DocumentoPagi[];



  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _documentoService: DocumentoService
  ) {
    this.paginas = [];
    this.getPagiDocumento(this._route.snapshot.paramMap.get("id"));
  }

  ngOnInit() {

  }

  getPagiDocumento(hex: string) {
    let arcCod = this.hex_to_ascii(hex);
    this.loadingPagi = true;
    this._documentoService.getDocumentoPagi(arcCod)
      .subscribe(
        (response: DocumentoPagi[]) => {
          if (response === null) {
            //this._router.navigateByUrl('/busqueda');
          }
          else {
            this.paginas = response;
            this.viewPagi(this.paginas[0].pagId);
          }
          this.loadingPagi = false;
        },
        error => {
          if (error.error.message === undefined) {
            this.error = 'Ha ocurrido un error, contacte al administrador del sistema.';
          }
          else {
            this.error = error.error.message;
          }
          console.log(error);
          this.loadingPagi = false;
        }
      );
  }

  hex_to_ascii(hex: string) {
    var hex = hex.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }

  viewPagi(_idPagi: number) {
    this.loadingView = true;
    this.imageView = this.paginas.find(x => x.pagId == _idPagi).urlPagi;
    this.loadingView = false;
  }

  selectPagi(_idPagi: number) {
    this.loadingView = true;
    this.imageView = this.paginas.find(x => x.pagId == _idPagi).urlPagi;
    this.loadingView = false;
  }

}
