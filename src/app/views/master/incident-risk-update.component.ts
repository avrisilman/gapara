import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';
import { DatePipe } from '@angular/common';

@Component({
  templateUrl: 'incident-risk-update.component.html'
})
export class IncidentRiskUpdateComponent implements OnInit{

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){

    this.apiService._detailIncident(localStorage.getItem("userId"))
    .subscribe(
      data =>{
        this.form.setValue(data.result)
      },
      error =>{
          console.log("invalid delete");
      }
    )

    this.form = this.fb.group({
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
    ._putIncident(this.form.value)
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