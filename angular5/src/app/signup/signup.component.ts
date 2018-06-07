import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loggedUsedData: any;
  constructor(private dataService: DatasharedService) {
    this.loggedUsedData = this.dataService.datafromLogin;
  }

  ngOnInit() {
  }

}
