import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'incident-risk.component.html'
})
export class IncidentRiskComponent implements OnInit{

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
    this.apiService.getIncident(this.form.value.keyword)
    .subscribe(
      data =>{
          console.log(data.result);
          this.datas = data.result;
      },
      error =>{
          console.log("invalid get incident");
      }
    )
  }

  update(userId){
    console.log(userId)
    window.localStorage.setItem('userId', userId);
    this.router.navigate(['master/incident-risk-update']);
  }

  saveit() {
    this.router.navigate(['master/incident-risk-add']);
  }

  delete(userId) {
    console.log(userId)
    if(confirm("Are you sure to delete ")) {
      this.apiService.delIncidentId(userId)
      .subscribe(
        data =>{
           //if(data.message == 'Delete Master User Successful'){
             alert(data.message)
          // }
        },
        error =>{
            console.log("invalid delete");
        }
      )
      console.log("Implement delete functionality here");
    }
   }  
 
}
