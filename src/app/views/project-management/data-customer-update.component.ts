import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'data-customer-update.component.html'
})
export class DataCustomerUpdateComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      customerName : ['', [Validators.required]],
      description : ['', [Validators.required]],
      address : ['', [Validators.required]],
      city : ['', [Validators.required]],
      phone : ['', [Validators.required]],
      npwp : ['', [Validators.required]],
      npwpName : ['', [Validators.required]],
      sales : ['', [Validators.required]],
      collector : ['', [Validators.required]],
      picId : ['', [Validators.required]],
      province   : ['', [Validators.required]],
    })
  }
  
  submit() {
    console.log(this.form.value)
    this.apiService
    ._postDataCustomer(this.form.value)
    .subscribe( 
      data => {
        if(data.message == "Save Master Customer Successful"){
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
