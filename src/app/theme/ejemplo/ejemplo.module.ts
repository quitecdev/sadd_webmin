import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EjemploRoutingModule } from './ejemplo-routing.module';
import { EjemploComponent } from './ejemplo.component';

// import ngx-viewer module
import { NgxViewerModule } from 'ngx-viewer';

@NgModule({
  declarations: [EjemploComponent],
  imports: [
    CommonModule,
    EjemploRoutingModule,
    NgxViewerModule
  ]
})
export class EjemploModule { }
