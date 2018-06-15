import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  id:any =1;
  formVar: FormGroup;

  constructor(private fb: FormBuilder) {  }
  addClass(id: any) {
    this.id = id;
  }  

  ngOnInit() {
    this.formVar = this.fb.group({
      firstname: '',
      middlename: '',
      lastname: '',
      gender: '', 
      dob: '',
      nation: '',
      ssn: '',
      marital: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      landmark: '',
      altphone: '',
      homecountryaddress: '',
      mobile: '',
      license: '',
      landline: '',
      bankstmt: '',
      email: '',

    });
  }

  onSubmit() {
    console.log(this.formVar.value);
  }
}