import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [DocumentoComponent],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    ScrollingModule
  ]
})
export class DocumentoModule { }
