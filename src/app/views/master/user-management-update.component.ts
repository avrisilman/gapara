import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'user-management-update.component.html'
})
export class UserManagementUpdateComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    console.log("hfhgf : "+localStorage.getItem("userId"))
    this.apiService
    .getUserId(localStorage.getItem("userId"))
    .subscribe( 
      data => {
        console.log(data.result.userId)
        this.form.setValue(data.result);
      },
      error =>{
        console.log("error");
      }
    );

    this.form = this.fb.group({
      userId : ['', [Validators.required]],
      employeeId : ['', [Validators.required]],
      employee : ['', [Validators.required]],
      customerId : ['', [Validators.required]],
      customer : ['', [Validators.required]],
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
      roleId : ['', [Validators.required]],
      userType : ['', [Validators.required]],
    })
  }

  submit() {
    console.log("hjhgjhghg")
    console.log(this.form.value)
    this.apiService
    ._putUserManagement(this.form.value)
    .subscribe( 
      data => {
        if(data.message == "Update Master User Successful"){
          alert(data.message)
        } else{
          alert(data.result)
        }
      },
      error =>{
        console.log("error");
      }
    );
  
  }
}