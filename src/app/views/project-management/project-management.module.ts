import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataCustomerComponent } from './data-customer.component';
import { DataCustomerUpdateComponent } from './data-customer-update.component';
import { IncidentManagementComponent } from './incident-management.component';
import { IncidentManagementAddComponent } from './incident-management-add.component';
import { ProjectManagementRoutingModule } from './project-management-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ProjectManagementRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    DataCustomerComponent,
    IncidentManagementComponent,
    IncidentManagementAddComponent,
    DataCustomerUpdateComponent,
  ]
})
export class ProjectManagementModule { }
