import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceSecurityGuardsComponent } from './attendance-security-guards.component';
import { AttendanceSecurityPatrolComponent } from './attendance-security-patrol.component';
import { AttendanceOfficeWorkerComponent } from './attendance-office-worker.component';
import { ReplacementComponent } from './replacement.component';
import { ReplacementUpdateComponent } from './replacement-update.component';
import { IncidentMonitoringComponent } from './incident-monitoring.component';
import { IncidentMonitoringDetailComponent } from './incident-monitoring-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Services Operations'
    },
    children: [
      {
        path: '',
        redirectTo: 'alerts'
      },
      {
        path: 'attendance-security-guards',
        component: AttendanceSecurityGuardsComponent,
        data: {
          title: 'Security Guards'
        }
      },
      {
        path: 'attendance-security-patrol',
        component: AttendanceSecurityPatrolComponent,
        data: {
          title: 'Security Patrol'
        }
      },
      {
        path: 'attendance-office-worker',
        component: AttendanceOfficeWorkerComponent,
        data: {
          title: 'ATTENDANCE REPORT & APPROVAL OFFICE WORKER'
        }
      },
      {
        path: 'replacement',
        component: ReplacementComponent,
        data: {
          title: 'REPLACEMENT REPORT & APPROVAL'
        }
      },
      {
        path: 'replacement-update',
        component: ReplacementUpdateComponent,
        data: {
          title: 'REPLACEMENT '
        }
      },
      {
        path: 'incident-monitoring',
        component: IncidentMonitoringComponent,
        data: {
          title: 'INCIDENT MONITORING'
        }
      },
      {
        path: 'incident-monitoring-detail',
        component: IncidentMonitoringDetailComponent,
        data: {
          title: 'INCIDENT MONITORING DETAIL'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesOperationsRoutingModule {}
