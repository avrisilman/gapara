import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'data-customer.component.html'
})
export class DataCustomerComponent implements OnInit{

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
    this.apiService.getCustomer(this.form.value.keyword)
    .subscribe(
      data =>{
          console.log(data.content[0]);
          this.datas = data.content;
      },
      error =>{
          console.log("invalid get employee");
      }
    )
  }

  saveit() {
    this.router.navigate(['project-management/data-customer-update']);
  }

  delete(customerId) {
    if(confirm("Are you sure to delete "+customerId)) {
      this.apiService.delCustomerId(customerId)
      .subscribe(
        data =>{
           if(data.message == 'Delete Master Customer Successfull'){
             alert('Delete Master Customer Successful')
           }
        },
        error =>{
            console.log("invalid");
        }
      )
      console.log("Implement delete functionality here");
    }
  }  

}
