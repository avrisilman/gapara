import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'user-management-add.component.html'
})
export class UserManagementAddComponent implements OnInit{

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      employeeId : ['', [Validators.required]],
      password : ['', [Validators.required]],
      roleId : ['', [Validators.required]],
      userType : ['', [Validators.required]],
      username : ['', [Validators.required]],
    })
  }

  submit() {
    console.log("hjhgjhghg")
    console.log(this.form.value)
    this.apiService
    ._postUserManagement(this.form.value)
    .subscribe( 
      data => {
        if(data.message == "Save Master User Successful"){
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