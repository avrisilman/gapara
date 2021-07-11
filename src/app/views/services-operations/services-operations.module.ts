import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AttendanceSecurityGuardsComponent } from './attendance-security-guards.component';
import { AttendanceSecurityPatrolComponent } from './attendance-security-patrol.component';
import { AttendanceOfficeWorkerComponent } from './attendance-office-worker.component';
import { ReplacementComponent } from './replacement.component';
import { IncidentMonitoringComponent } from './incident-monitoring.component';
import { IncidentMonitoringDetailComponent } from './incident-monitoring-detail.component';
import { ServicesOperationsRoutingModule } from './services-operations-routing.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ServicesOperationsRoutingModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    AttendanceSecurityGuardsComponent,
    AttendanceSecurityPatrolComponent,
    AttendanceOfficeWorkerComponent,
    ReplacementComponent,
    IncidentMonitoringComponent,
    IncidentMonitoringDetailComponent,
  ]
})
export class ServicesOperationsModule { }
