import { navItems } from '../../_nav';
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../views/api/api.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  public sidebarMinimized = false;
  public navItems = navItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    
    if(confirm("Are you sure to logout ")) {
      console.log("Implement delete functionality here");
      localStorage.clear();
      this.router.navigate(['/login'])
      // this.apiService._logout(null)
      // .subscribe(
      //   data =>{
      //       console.log(data.message);
      //   },
      //   error =>{
      //       console.log("invalid");
      //   }
      // )
    }
  }

}
