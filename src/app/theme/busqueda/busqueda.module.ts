import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [
    CommonModule,
    BusquedaRoutingModule,
    SharedModule
  ]
})
export class BusquedaModule { }
