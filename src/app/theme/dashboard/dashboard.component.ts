import { Component, OnInit } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { Dashboard } from "../../models/dashboard";
import { DocumentosRecientes } from "../../models/documentosRecientes";
import { DashboardService } from "../../services/dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboar: Dashboard={};
  error = '';
  loading = false;
  documentos: DocumentosRecientes[];
  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 2,
  };
  interval: any;
  currentView: string;

  constructor(
    private _dashboardService: DashboardService
  ) {

    this.obtenerContadores();
    this.obtenerDocuementosRecientes();
  }

  ngOnInit() {

  }

  obtenerContadores() {
    this._dashboardService.getDashboard()
      .subscribe(
        (response:Dashboard) =>{
          this.dashboar = response;
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

  obtenerDocuementosRecientes(){
    this.loading=true;
    this._dashboardService.getDocumentosRecientes()
    .subscribe(
      (response:DocumentosRecientes[]) =>{
        this.documentos = response;
        this.loading=false;
      },
      error=>{
        if(error.error.message=== undefined){
          this.error='Ha ocurrido un error, contacte al administrador del sistema.';
        }
        else{
          this.error = error.error.message;
        }
        console.log(this.error);
        this.loading=false;
      }
    );
  }
}
