import { Component, OnInit } from '@angular/core';
import { Documento } from '../../models/documento';
import { DocumentoService } from "../../services/documento.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {


  busquedaRapidaForm: FormGroup;
  loading = false;
  submitted = false;
  documentos: Documento[];
  error = '';

  constructor(
    private _formBuilder: FormBuilder,
    private _documentoService: DocumentoService
  ) {

  }

  ngOnInit() {
    this.busquedaRapidaForm = this._formBuilder.group({
      palabraRapida: ['', Validators.required]
    });


  }

  get f() {
    return this.busquedaRapidaForm.controls;
  }


  busquedaRapida() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.busquedaRapidaForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.busquedaRapidaForm)
    // this._documentoService.getDocumentoBusquedaRapida(this.busquedaRapidaForm.pa)
    //   .subscribe(
    //     (response: Documento[]) => {
    //       this.documentos = response;
    //       this.loading = false;
    //     },
    //     error => {
    //       if (error.error.message === undefined) {
    //         this.error = 'Ha ocurrido un error, contacte al administrador del sistema.';
    //       }
    //       else {
    //         this.error = error.error.message;
    //       }
    //       console.log(this.error);
    //       this.loading = false;
    //     }
    //   );
  }

}
