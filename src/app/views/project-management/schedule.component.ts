import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'schedule.component.html'
})
export class ScheduleComponent {
  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/schedule']);
  }
  
}
