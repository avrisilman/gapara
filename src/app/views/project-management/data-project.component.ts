import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'data-project.component.html'
})
export class DataProjectComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/data-project-update']);
  }

}
