import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeUpdateComponent } from './employee-update.component';
import { CompanyInfoComponent } from './company-info.component';
import { CompanyInfoUpdateComponent } from './company-info-update.component';
import { UserManagementComponent } from './user-management.component';
import { UserManagementUpdateComponent } from './user-management-update.component';
import { UserManagementAddComponent } from './user-management-add.component';
import { ServicesComponent } from './services.component';
import { ServicesAddComponent } from './services-add.component';
import { ServicesUpdateComponent } from './services-update.component';
import { IncidentRiskComponent } from './incident-risk.component';
import { IncidentRiskUpdateComponent } from './incident-risk-update.component';
import { IncidentRiskAddComponent } from './incident-risk-add.component';
import { InventoryComponent } from './inventory.component';
import { InventoryUpdateComponent } from './inventory-update.component';
import { TrainingComponent } from './training.component';
import { TrainingUpdateComponent } from './training-update.component';
import { DocumentControlComponent } from './document-control.component';
import { DocumentControlUpdateComponent } from './document-control-update.component';
import { RoleManagementComponent } from './role-management.component';
import { RoleManagementUpdateComponent } from './role-management-update.component'
import { PrivilegeManagementComponent } from './privilege-management.component';
import { PrivilegeManagementUpdateComponent } from './privilege-management-update.component';
import { PostOrderComponent } from './post-order.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Master'
    },
    children: [
      {
        path: '',
        redirectTo: 'company-info'
      },
      {
        path: 'company-info',
        component: CompanyInfoComponent,
        data: {
          title: 'Company Info'
        }
      },
      {
        path: 'company-info-update',
        component: CompanyInfoUpdateComponent,
        data: {
          title: 'Company Info Update'
        }
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        data: {
          title: 'User Management'
        }
      },
      {
        path: 'user-management-update',
        component: UserManagementUpdateComponent,
        data: {
          title: 'User Management Update'
        }
      },
      {
        path: 'user-management-add',
        component: UserManagementAddComponent,
        data: {
          title: 'User Management Add'
        }
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'Employee'
        }
      },
      {
        path: 'employee-update',
        component: EmployeeUpdateComponent,
        data: {
          title: 'Employee Update'
        }
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Services'
        }
      },
      {
        path: 'services-add',
        component: ServicesAddComponent,
        data: {
          title: 'Services Add'
        }
      },
      {
        path: 'services-update',
        component: ServicesUpdateComponent,
        data: {
          title: 'Services Update'
        }
      },
      {
        path: 'incident-risk',
        component: IncidentRiskComponent,
        data: {
          title: 'Incident Risk'
        }
      },
      {
        path: 'incident-risk-add',
        component: IncidentRiskAddComponent,
        data: {
          title: 'Incident Risk Add'
        }
      },
      {
        path: 'incident-risk-update',
        component: IncidentRiskUpdateComponent,
        data: {
          title: 'Incident Risk'
        }
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        data: {
          title: 'Inventory'
        }
      },
      {
        path: 'inventory-update',
        component: InventoryUpdateComponent,
        data: {
          title: 'Inventory'
        }
      },
      {
        path: 'training',
        component: TrainingComponent,
        data: {
          title: 'Training'
        }
      },
      {
        path: 'training-update',
        component: TrainingUpdateComponent,
        data: {
          title: 'Training'
        }
      },
      {
        path: 'document-control',
        component: DocumentControlComponent,
        data: {
          title: 'Document Control'
        }
      },
      {
        path: 'document-control-update',
        component: DocumentControlUpdateComponent,
        data: {
          title: 'Document Control'
        }
      },
      {
        path: 'role-management',
        component: RoleManagementComponent,
        data: {
          title: 'ROLE MANAGEMENT'
        }
      },
      {
        path: 'role-management-update',
        component: RoleManagementUpdateComponent,
        data: {
          title: 'ROLE MANAGEMENT'
        }
      },
      {
        path: 'privilege-management',
        component: PrivilegeManagementComponent,
        data: {
          title: 'PRIVILEGE MANAGEMENET'
        }
      },
      {
        path: 'privilege-management-update',
        component: PrivilegeManagementUpdateComponent,
        data: {
          title: 'PRIVILEGE MANAGEMENET'
        }
      },
      {
        path: 'post-order',
        component: PostOrderComponent,
        data: {
          title: 'POST ORDER'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
