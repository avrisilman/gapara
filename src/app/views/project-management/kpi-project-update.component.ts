import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'kpi-project-update.component.html'
})
export class KPIProjectUpdateComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/data-customer-update']);
  }
}
