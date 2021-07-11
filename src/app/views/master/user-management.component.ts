import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'user-management.component.html'
})
export class UserManagementComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      keyword : ['', [Validators.required]],
    })
  }
  onSearch() {
    console.log(this.form.value)
    this.apiService.getUser(this.form.value.keyword)
    .subscribe(
      data =>{
          console.log(data.result[0]);
          this.datas = data.result;
      },
      error =>{
          console.log("invalid get users");
      }
    )
  }

  saveit() {
    this.router.navigate(['master/user-management-add'])
  }

  update(userId, username){
    console.log(userId, username)
    window.localStorage.setItem('userId', userId);
    window.localStorage.setItem('username', username);
    this.router.navigate(['master/user-management-update'])
  }

  role(){
    this.router.navigate(['master/role-management'])
  }

  privilege(){
    this.router.navigate(['master/privilege-management'])
  }

  delete(userId, username) {
    if(confirm("Are you sure to delete "+username)) {
      this.apiService.delUserId(userId)
      .subscribe(
        data =>{
           if(data.message == 'Delete Master User Successful'){
             alert('Delete Master User Successful')
           }
        },
        error =>{
            console.log("invalid get users");
        }
      )
      console.log("Implement delete functionality here");
    }
  }  

}
