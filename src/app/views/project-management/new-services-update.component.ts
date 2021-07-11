import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'new-services-update.component.html'
})
export class NewServicesUpdateComponent {

  constructor(private router: Router  ) {}
  saveit() {
    this.router.navigate(['master/post-order']);
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
