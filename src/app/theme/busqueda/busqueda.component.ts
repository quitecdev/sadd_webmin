import { Component, OnInit } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from "../../services/documento.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  documentos: Documento[];
    error = '';
  loading = false;

  constructor(
    private _documentoService:DocumentoService
  ) {
    this.busquedaRapida('1383801')
  }

  ngOnInit() {

  }

  busquedaRapida(palabra:string){
    this._documentoService.getDocumentoBusquedaRapida(palabra)
    .subscribe(
      (response:Documento[]) =>{
        this.documentos = response;
        console.log(this.documentos);
      },
      error=>{
        if(error.error.message=== undefined){
          this.error='Ha ocurrido un error, contacte al administrador del sistema.';
        }
        else{
          this.error = error.error.message;
        }
        console.log(this.error);
      }
    );
  }

}
