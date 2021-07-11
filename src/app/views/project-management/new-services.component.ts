import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'new-services.component.html'
})
export class NewServicesComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/new-services-update']);
  }

}
