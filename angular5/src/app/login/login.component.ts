import { DatasharedService } from './../datashared.service';
import { AutheticationProfileServiceService } from '../AutheticationProfileService.service';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: any;
  email: any;
  data: any;
  emialId: any;
  firstName: any;
  lastName: any;
  dob: any;
  errmsg: any;
  errcode: any;
  isModelTrigger: boolean;
  isSignupTrigger: boolean;
  constructor( private socialAuthService: AuthService,
              private autheticationProfileServiceService: AutheticationProfileServiceService,
              private router: Router,
              private dataService: DatasharedService ) {}

  ngOnInit() {
  }

  closeClicked() {
    this.isModelTrigger = false;
  }

  signUpClicked() {
    this.isSignupTrigger = false;
  }
  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.name = userData.name;
        this.email = userData.email;
        this.autheticationProfileServiceService.getLoggedUserData()
        .subscribe(
          (loggeddata: any) => {
            if (loggeddata.Candidate[0].response[0].code === '200') {
            this.dataService.datafromLogin = loggeddata;
            this.router.navigate(['/home']);
           }
            if (loggeddata.Candidate[0].response[0].code === '50000') {
            this.dataService.datafromLogin = loggeddata;
            this.isSignupTrigger = true;
            // this.router.navigate(['/signup']);
           }
           if (loggeddata.Candidate[0].response[0].code === '401') {
            this.isModelTrigger = true;
            this.errmsg = 'Error Message: ' + loggeddata.Candidate[0].response[0].message;
            this.errcode = 'Error Code: ' + loggeddata.Candidate[0].response[0].code;
           }
          }
        );
      }
    );
  }
}
