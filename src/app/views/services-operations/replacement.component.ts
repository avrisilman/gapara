import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'replacement.component.html'
})
export class ReplacementComponent {
  
  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['services-operations/replacement-update']);
  }
  
}
