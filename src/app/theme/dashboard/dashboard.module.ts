import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountUpModule } from 'countup.js-angular2';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule} from './dashboard-routing.module'
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    CountUpModule,
    NgxDatatableModule,
    DashboardRoutingModule,
    SharedModule
  ],

})
export class DashboardModule { }
