import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataCustomerComponent } from './data-customer.component';
import { DataCustomerUpdateComponent } from './data-customer-update.component';
import { DataProjectComponent } from './data-project.component';
import { DataProjectUpdateComponent } from './data-project-update.component';
import { KPIProjectComponent } from './kpi-project.component';
import { ServiceSiteComponent } from './service-site.component';
import { IncidentManagementComponent } from './incident-management.component';
import { IncidentManagementAddComponent } from './incident-management-add.component';
import { NewServicesComponent } from './new-services.component';
import { NewServicesUpdateComponent } from './new-services-update.component';
import { InventoryComponent } from './inventory.component';
import { InventoryUpdateComponent } from './inventory-update.component';
import { ScheduleComponent } from './schedule.component';
import { KPIProjectUpdateComponent } from './kpi-project-update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project Management'
    },
    children: [
      {
        path: '',
        redirectTo: 'alerts'
      },
      {
        path: 'data-customer',
        component: DataCustomerComponent,
        data: {
          title: 'Data Customer'
        }
      },
      {
        path: 'data-customer-update',
        component: DataCustomerUpdateComponent,
        data: {
          title: 'Data Customer Update'
        }
      },
      {
        path: 'data-project',
        component: DataProjectComponent,
        data: {
          title: 'DATA PROJECT'
        }
      },
      {
        path: 'service-site',
        component: ServiceSiteComponent,
        data: {
          title: 'SERVICE & SITE'
        }
      },
      {
        path: 'new-services',
        component: NewServicesComponent,
        data: {
          title: 'NEW SERVICES'
        }
      },
      {
        path: 'new-services-update',
        component: NewServicesUpdateComponent,
        data: {
          title: 'NEW SERVICES'
        }
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        data: {
          title: 'INVENTORY'
        }
      },
      {
        path: 'inventory-update',
        component: InventoryUpdateComponent,
        data: {
          title: 'INVENTORY'
        }
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
        data: {
          title: 'SCHEDULE'
        }
      },
      {
        path: 'data-project-update',
        component: DataProjectUpdateComponent,
        data: {
          title: 'DATA PROJECT'
        }
      },
      {
        path: 'kpi-project',
        component: KPIProjectComponent,
        data: {
          title: 'KPI PROJECT'
        }
      },
      {
        path: 'kpi-project-update',
        component: KPIProjectUpdateComponent,
        data: {
          title: 'KPI PROJECT'
        }
      },
      {
        path: 'incident-management',
        component: IncidentManagementComponent,
        data: {
          title: 'INCIDENT MANAGEMENT'
        }
      },
      {
        path: 'incident-management-add',
        component: IncidentManagementAddComponent,
        data: {
          title: 'INCIDENT MANAGEMENT ADD'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {}
