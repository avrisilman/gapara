import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'services-update.component.html'
})
export class ServicesUpdateComponent implements OnInit{

  form: FormGroup
  datas: any;
  servicesId: String
  servicesType: String
  servicesName: String
  description: String

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      servicesType : ['', [Validators.required]],
      servicesName : ['', [Validators.required]],
      description : ['', [Validators.required]], 
      postOrder: this.fb.array([
      
      ]) 
    });

    this.apiService
    ._detailService(localStorage.getItem("servicesId"))
    .subscribe( 
      data => {
        console.log(data.result.servicesId);
        
        this.datas = data.result.postOrder
        this.servicesId = data.result.servicesId
        this.servicesType = data.result.servicesType
        this.servicesName = data.result.servicesName
        this.description = data.result.description
      },
      error =>{
        console.log("error");
      }
    );

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
