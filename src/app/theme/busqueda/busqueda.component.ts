import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Documento } from '../../models/documento';
import {transition, trigger, style, animate} from '@angular/animations';
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
  contador:number;

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
    this.documentos= [];
    // stop here if form is invalid
    if (this.busquedaRapidaForm.invalid) {
      return;
    }

    this.loading = true;
    this._documentoService.getDocumentoBusquedaRapida(this.busquedaRapidaForm.value.palabraRapida)
      .subscribe(
        (response: Documento[]) => {
          this.documentos = response;
          this.loading = false;
          this.contador=this.documentos.length;
        },
        error => {
          if (error.error.message === undefined) {
            this.error = 'Ha ocurrido un error, contacte al administrador del sistema.';
          }
          else {
            this.error = error.error.message;
          }
          console.log(this.error);
          this.loading = false;
        }
      );
  }

  openMyModal(event,arcCod) {
    document.querySelector('#' + event).classList.add('md-show');
    console.log(arcCod);
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

}
