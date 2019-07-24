import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
        canActivate: [AuthGuard]
      },
      {
        path: 'busqueda',
        loadChildren: './theme/busqueda/busqueda.module#BusquedaModule'
        //canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: './theme/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'navigation',
        loadChildren: './theme/navigation/navigation.module#NavigationModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'widget',
        loadChildren: './theme/widget/widget.module#WidgetModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'basic',
        loadChildren: './theme/ui-elements/basic/basic.module#BasicModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'advance',
        loadChildren: './theme/ui-elements/advance/advance.module#AdvanceModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'animations',
        loadChildren: './theme/ui-elements/animation/animation.module#AnimationModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'forms',
        loadChildren: './theme/forms/forms.module#FormsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'bootstrap-table',
        loadChildren: './theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'data-table',
        loadChildren: './theme/table/data-table/data-table.module#DataTableModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: './theme/user/user.module#UserModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'email',
        loadChildren: './theme/email/email.module#EmailModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'crm-contact',
        loadChildren: './theme/crm-contact/crm-contact.module#CrmContactModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'task',
        loadChildren: './theme/task/task.module#TaskModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'editor',
        loadChildren: './theme/extension/editor/editor.module#EditorModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'invoice',
        loadChildren: './theme/extension/invoice/invoice.module#InvoiceModule'
      },
      {
        path: 'file-upload-ui',
        loadChildren: './theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule'
      },
      {
        path: 'calendar',
        loadChildren: './theme/extension/event-calendar/event-calendar.module#EventCalendarModule'
      },
      {
        path: 'charts',
        loadChildren: './theme/chart/chart.module#ChartModule'
      },
      {
        path: 'map',
        loadChildren: './theme/map/map.module#MapModule'
      },
      {
        path: 'simple-page',
        loadChildren: './theme/simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './theme/auth/auth.module#AuthModule'
      },
      {
        path: 'maintenance/error',
        loadChildren: './theme/maintenance/error/error.module#ErrorModule'
      },
      {
        path: 'maintenance/coming-soon',
        loadChildren: './theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      },
      {
        path: 'email/email-template',
        loadChildren: './theme/email/email-template/email-template.module#EmailTemplateModule'
      },
      {
        path: 'maintenance/offline-ui',
        loadChildren: './theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
      }
    ]
  },
      // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
