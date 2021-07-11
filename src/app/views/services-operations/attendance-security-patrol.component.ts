import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'attendance-security-patrol.component.html'
})
export class AttendanceSecurityPatrolComponent implements OnInit{
  
  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      customerName : ['', [Validators.required]],
      projectName : ['', [Validators.required]]
    })
  }
  onSearch() {
    console.log(this.form.value)
    this.apiService.getSecurityPatrol(this.form.value.customerName, this.form.value.projectName)
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
