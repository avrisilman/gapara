import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'inventory.component.html'
})
export class InventoryComponent {
  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['project-management/inventory-update']);
  }
  
}
