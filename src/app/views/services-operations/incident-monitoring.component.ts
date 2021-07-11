import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'incident-monitoring.component.html'
})
export class IncidentMonitoringComponent implements OnInit{
  
  datas: any;
  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    this.form = this.fb.group({
      category : ['', [Validators.required]],
      customerName : ['', [Validators.required]],
      incidentType : ['', [Validators.required]],
      projectName : ['', [Validators.required]],
      siteName : ['', [Validators.required]],
      status : ['', [Validators.required]],
    })
  }
  onSearch() {
    console.log(this.form.value)
    this.apiService.getIncidentMonitoring(this.form.value.category, 
      this.form.value.customerName,
      this.form.value.incidentType,
      this.form.value.projectName,
      this.form.value.siteName,
      this.form.value.status)
    .subscribe(
      data =>{
          console.log(data.content[0]);
          this.datas = data.content;
      },
      error =>{
          console.log("invalid get incident monitoring");
      }
    )
  }

  onDetail(){
    // this.apiService.getIncidentReportingDetail()
    // .subscribe(
    //   data =>{
    //       console.log(data.result.incidentReportDate)
    //   },
    //   error =>{
    //       console.log("invalid get incident reporting detail");
    //   }
    // )
    this.router.navigate(['services-operations/incident-monitoring-detail']);
  }

  // saveit() {
  //   this.router.navigate(['services-operations/incident-monitoring-detail']);
  // }
  
}
