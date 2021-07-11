import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'services.component.html'
})
export class ServicesComponent implements OnInit{
  
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
    this.apiService.getService(this.form.value.keyword)
    .subscribe(
      data =>{
          console.log(data.result[0]);
          this.datas = data.result;
      },
      error =>{
          console.log("invalid get employee");
      }
    )
  }

    update(servicesId, servicesType, servicesName, description){
      console.log(servicesId)
      window.localStorage.setItem('servicesId', servicesId);
      window.localStorage.setItem('servicesType', servicesType);
      window.localStorage.setItem('servicesName', servicesName);
      window.localStorage.setItem('description', description);
      this.router.navigate(['master/services-update']);
  }


  saveit() {
    this.router.navigate(['master/services-add']);
  }

}
