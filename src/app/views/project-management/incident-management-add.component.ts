import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'incident-management-add.component.html'
})
export class IncidentManagementAddComponent implements OnInit{

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      incidentType : ['', [Validators.required]],
      incidentName : ['', [Validators.required]],
      incidentCategory : ['', [Validators.required]],
      incidentDescription : ['', [Validators.required]], 
    });
  }

  submit() {
    console.log(this.form.value)
    this.apiService
    ._postIncidentMonitoring(this.form.value)
    .subscribe( 
      data => {
        if(data.message == "Save Project Incident Successful"){
          alert(data.message)
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
