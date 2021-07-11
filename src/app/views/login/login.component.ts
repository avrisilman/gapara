import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit { 

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
    })
  }

  submit() {
    console.log(this.form.value)
    this.apiService
    .signin(this.form.value)
    .subscribe( 
      data => {
        if (data.token != null){
          window.localStorage.setItem('token', data.token);
          window.localStorage.setItem('email', data.email);
          window.localStorage.setItem('name', data.name);
          window.localStorage.setItem('userName', data.userName);
          console.log(data.token)
          this.router.navigate(['dashboard']);
        } else if (data.message != null){
            alert(data.message)
        }
      },
      error =>{
        console.log("error");
      }
    );
  
  }
}
