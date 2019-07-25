import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import {SharedModule} from '../../shared/shared.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BusquedaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BusquedaRoutingModule,
    SharedModule
  ]
})
export class BusquedaModule { }
