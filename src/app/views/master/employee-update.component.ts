import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api/api.services';

@Component({
  templateUrl: 'employee-update.component.html'
})
export class EmployeeUpdateComponent implements OnInit{
  

  form: FormGroup

  constructor(private router: Router, private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(){
    if(localStorage.getItem('token') == null){
      this.router.navigate(['/login'])
    } else {
      this.form = this.fb.group({
        employeeId : ['', [Validators.required]],
        contract : ['', [Validators.required]],
        employeeName : ['', [Validators.required]],
        agreementDate : ['', [Validators.required]],
        identityNumber : ['', [Validators.required]],
        contractStartDate : ['', [Validators.required]],
        contractEndDate : ['', [Validators.required]],
        workingType : ['', [Validators.required]],
        birthPlace : ['', [Validators.required]],
        birthDate : ['', [Validators.required]],
        jobTitle : ['', [Validators.required]],
        address : ['', [Validators.required]],
        position : ['', [Validators.required]],
        religion : ['', [Validators.required]],
        phone : ['', [Validators.required]],
        grade : ['', [Validators.required]],
        email : ['', [Validators.required]],
        department : ['', [Validators.required]],
        maritalStatus : ['', [Validators.required]],
        upline : ['', [Validators.required]], 
        height : ['', [Validators.required]],
        weight : ['', [Validators.required]],
        npwp : ['', [Validators.required]],
        kta : ['', [Validators.required]],
        emergencyContactPerson : ['', [Validators.required]],
        emergencyContactPhone : ['', [Validators.required]],
        emergencyContactPosition : ['', [Validators.required]],
        bankAccount : ['', [Validators.required]],
        bankAccountName : ['', [Validators.required]],
        bankAccountNumber : ['', [Validators.required]],
        hirePlace : ['', [Validators.required]],
      })
    }
  }

  submit() {
    console.log(new Date().toISOString())
    console.log(this.form.value)
  }

}
