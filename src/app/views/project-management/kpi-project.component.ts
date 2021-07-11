import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'kpi-project.component.html'
})
export class KPIProjectComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/kpi-project-update']);
  }
}
