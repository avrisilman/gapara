import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'service-site.component.html'
})
export class ServiceSiteComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/new-services']);
  }

}
