import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'services-add.component.html'
})
export class ServicesAddComponent implements OnInit{

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      servicesType : ['', [Validators.required]],
      servicesName : ['', [Validators.required]],
      description : ['', [Validators.required]], 
      postOrder: this.fb.array([
      
      ]) 
    });
  }

  submit() {
    console.log(this.form.value)
    this.apiService
    ._postService(this.form.value)
    .subscribe( 
      data => {
        if(data.message == "Fetch Master Services Succesful"){
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

  saveit() {
    this.router.navigate(['master/post-order']);
  }

}
