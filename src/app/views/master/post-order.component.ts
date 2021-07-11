import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'post-order.component.html'
})
export class PostOrderComponent implements OnInit{

  form: FormGroup
  postOrder : FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
  
    this.form = this.fb.group({
      servicesId : localStorage.getItem("servicesId"),
      servicesType : localStorage.getItem("servicesType"),
      servicesName : localStorage.getItem("servicesName"),
      description: localStorage.getItem("description"),
      postOrder : this.fb.group({
        postOrderId : ['', [Validators.required]],
        postOrderName : ['', [Validators.required]],
        description : ['', [Validators.required]], 
        sop : ['', [Validators.required]]
      })
    });
  }

  submit() {
   // var postOrder = JSON.stringify(this.form.value);
   // var service = JSON.stringify(this.form2.value);
    //var split = JSON.stringify(this.form2.value).split("}")
    console.log(this.form.value)
   // console.log(this.form2.value)
    // this.apiService
    // ._putService(this.form.value)
    // .subscribe( 
    //   data => {
    //     if(data.message == "Fetch Master Services Succesful"){
    //       alert(data.message)
    //     } else{
    //       alert(data.result)
    //     }
    //   },
    //   error =>{
    //     console.log("error");
    //   }
    // );
  
  }


}
