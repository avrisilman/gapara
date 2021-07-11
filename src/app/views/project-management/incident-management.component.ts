import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'incident-management.component.html'
})
export class IncidentManagementComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      keyword : ['', [Validators.required]],
    })
  }

  onSearch() {
    this.apiService.getIncidentManagment(this.form.value.keyword)
    .subscribe(
      data =>{
          this.datas = data.content;
          console.log(data.content);
          
      },
      error =>{
          console.log("invalid");
      }
    )
  }
  
  saveit() {
    this.router.navigate(['project-management/incident-management-add']);
  }
  
}
