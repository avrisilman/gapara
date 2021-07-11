import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'incident-monitoring-detail.component.html'
})
export class IncidentMonitoringDetailComponent implements OnInit{

  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
  this.apiService.getIncidentReportingDetail()
    .subscribe(
      data =>{
          console.log(data.result.incidentReportDate)
      },
      error =>{
          console.log("invalid get incident reporting detail");
      }
    )
  }

}
