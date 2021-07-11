import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'attendance-security-guards.component.html'
})
export class AttendanceSecurityGuardsComponent implements OnInit{
  
  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      customerName : ['', [Validators.required]],
      projectName : ['', [Validators.required]],
      siteName : ['', [Validators.required]],
    })
  }
  onSearch() {
    console.log(this.form.value)
    this.apiService.getSecurityGuard(this.form.value.customerName, this.form.value.projectName, this.form.value.siteName)
    .subscribe(
      data =>{
          console.log(data.result[0]);
          this.datas = data.result;
      },
      error =>{
          console.log("invalid");
      }
    )
  }


}
