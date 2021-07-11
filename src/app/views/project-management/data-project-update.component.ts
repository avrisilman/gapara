import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'data-project-update.component.html'
})
export class DataProjectUpdateComponent {

  constructor(private router: Router  ) {}
  service() {
    this.router.navigate(['project-management/service-site']);
  }

  inventory() {
    this.router.navigate(['project-management/inventory']);
  }

  schedule() {
    this.router.navigate(['project-management/schedule']);
  }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
