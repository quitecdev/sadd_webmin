import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoRoutingModule } from './documento-routing.module';
import { DocumentoComponent } from './documento.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [DocumentoComponent],
  imports: [
    CommonModule,
    DocumentoRoutingModule,
    NgScrollbarModule,
    ScrollingModule,
  ]
})
export class DocumentoModule { }
