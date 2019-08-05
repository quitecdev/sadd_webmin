import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';
// import ngx-viewer module
import { NgxViewerModule } from 'ngx-viewer';


@NgModule({
  declarations: [DocumentoComponent],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    NgScrollbarModule,
    ScrollingModule,
    NgxViewerModule,
    FormsModule
  ]
})
export class DocumentoModule { }
