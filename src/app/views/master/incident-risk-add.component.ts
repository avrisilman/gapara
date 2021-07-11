import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'incident-risk-add.component.html'
})
export class IncidentRiskAddComponent implements OnInit{

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      createdBy : localStorage.getItem("name"),
      createDate : new Date().toISOString(),
      incidentId : ['', [Validators.required]],
      incidentName : ['', [Validators.required]],
      incidentType : ['', [Validators.required]],
      incidentCategory : ['', [Validators.required]],
      incidentDescription : ['', [Validators.required]],
    })
  }

  submit() {
    console.log(this.form.value)
    this.apiService
    ._postIncident(this.form.value)
    .subscribe( 
      data => {
        alert(data.message)
      },
      error =>{
        console.log("error");
      }
    );
  
  }
}