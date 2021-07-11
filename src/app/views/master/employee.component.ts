import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/login'])
    } else {
    this.form = this.fb.group({
      keyword : ['', [Validators.required]],
    })
  }
  }
  onSearch() {
    console.log(this.form.value)
    this.apiService.getEmployee(this.form.value.keyword)
    .subscribe(
      data =>{
          console.log(data.result[0].employeeId);
          this.datas = data.result;
      },
      error =>{
          console.log("invalid get employee");
      }
    )
  }

  saveit() {
    this.router.navigate(['master/employee-update']);
  }

}
