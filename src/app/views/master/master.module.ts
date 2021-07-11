import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EmployeeComponent } from './employee.component';
import { EmployeeUpdateComponent } from './employee-update.component';
import { ServicesComponent } from './services.component';
import { ServicesUpdateComponent } from './services-update.component';
import { ServicesAddComponent } from './services-add.component';
import { PostOrderComponent } from './post-order.component'
import { IncidentRiskComponent } from './incident-risk.component';
import { IncidentRiskUpdateComponent } from './incident-risk-update.component';
import { IncidentRiskAddComponent } from './incident-risk-add.component';
import { InventoryComponent } from './inventory.component';
import { TrainingComponent } from './training.component';
import { DocumentControlComponent } from './document-control.component';
import { CompanyInfoComponent } from './company-info.component';
import { CompanyInfoUpdateComponent } from './company-info-update.component';
import { RoleManagementComponent } from './role-management.component';
import { PrivilegeManagementComponent } from './privilege-management.component';
import { UserManagementComponent } from './user-management.component';
import { UserManagementUpdateComponent } from './user-management-update.component';
import { UserManagementAddComponent } from './user-management-add.component';
import { MasterRoutingModule } from './master-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    EmployeeComponent, 
    EmployeeUpdateComponent,
    ServicesComponent,
    ServicesUpdateComponent,
    ServicesAddComponent,
    PostOrderComponent,
    IncidentRiskComponent,
    IncidentRiskUpdateComponent,
    IncidentRiskAddComponent,
    InventoryComponent,
    TrainingComponent,
    DocumentControlComponent,
    CompanyInfoComponent,
    CompanyInfoUpdateComponent,
    UserManagementComponent,
    UserManagementUpdateComponent,
    UserManagementAddComponent,
    RoleManagementComponent,
    ServicesUpdateComponent,
    PrivilegeManagementComponent,
  ]
})
export class MasterModule { }
