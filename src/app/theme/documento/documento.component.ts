import { DocumentoPagi } from './../../models/documentoPagi';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentoService } from '../../services/documento.service';
import { DownloadService } from '../../services/download.service';
import * as FileSaver from "file-saver";

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  loadingPagi = false;
  loadingView = false;
  masterSelected: boolean;

  error = '';
  shown = 'hover';

  paginas: DocumentoPagi[];
  paginaView: DocumentoPagi[];
  paginaSelect: DocumentoPagi[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _documentoService: DocumentoService,
    private _downloadService: DownloadService
  ) {
    this.masterSelected = false;
    this.paginas = [];
    this.getPagiDocumento(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() { }

  getPagiDocumento(hex: string) {
    let arcCod = this.hex_to_ascii(hex);
    this.loadingPagi = true;
    this._documentoService.getDocumentoPagi(arcCod).subscribe(
      (response: DocumentoPagi[]) => {
        if (response === null) {
          this._router.navigateByUrl('/busqueda');
        } else {
          this.listPage(response);
          this.viewPagi(this.paginas[0].pagId);
        }
        this.loadingPagi = false;
      },
      (error) => {
        if (error.error.message === undefined) {
          this.error = 'Ha ocurrido un error, contacte al administrador del sistema.';
        } else {
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

  listPage(page: DocumentoPagi[]) {
    this.paginas = page;
    for (var i = 0; i < this.paginas.length; i++) {
      this.paginas[i].isSelected = this.masterSelected;
    }
  }

  viewPagi(_idPagi: number) {
    this.loadingView = true;
    this.paginaView = [];
    this.paginaView.push(this.paginas.find((x) => x.pagId == _idPagi));
    this.loadingView = false;
  }

  selectPagi(_idPagi: number) {
    this.loadingView = true;
    this.paginaView = [];
    this.paginaView.push(this.paginas.find((x) => x.pagId == _idPagi));
    this.loadingView = false;
  }

  checkUncheckAll() {
    for (var i = 0; i < this.paginas.length; i++) {
      this.paginas[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
    this.masterSelected = this.paginas.every(function (item: any) {
      return item.isSelected == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.paginaSelect = [];
    for (var i = 0; i < this.paginas.length; i++) {
      if (this.paginas[i].isSelected) this.paginaSelect.push(this.paginas[i]);
    }
  }

  dowdownload() {
    this._downloadService.downloadReport(this.paginaSelect).subscribe(
      data => {
        //saveAs(data, filename);
        console.log(data);
      },
      err => {
        alert("Problem while downloading the file.");
        console.error(err);
      }
    );
    // this._downloadService.getPdfDocument(this.paginaSelect).subscribe(
    //   (response) => {
    //     //this.downLoadFile(response, 'WeeklySummary.pdf');
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: "application/pdf" });
    FileSaver.saveAs(blob, "WeeklySummary.pdf");
  }
}
