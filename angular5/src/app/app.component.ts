
import { Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of'; 
import {
    AuthService,
  
    GoogleLoginProvider
} from 'angular5-social-login';
import { Router } from '@angular/router'
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public p:String="";
  public errcode:String ;
  public errmsg:string;

//  detail:String = 'User Not Found';
    constructor( private socialAuthService: AuthService,private http: Http ) {}
    
     
  //     this.http
  //       .get("/assets/test.json")
  //       .map(data => data.json())
  //       .subscribe(data => {
  // this.p=data.Candidate[0].email;
  //         console.log(data.Candidate[0].email);
  //       });
   
  
  
      
    

    
  
    
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
      
    
       if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
      }
      
      this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {

          
          console.log(socialPlatform+" sign in data : " , userData);
          this.http
        .get("/assets/test.json")
        .map(data => data.json())
        .subscribe(data => {
         this.p=data.Candidate[0].email;
         //if(this.p!=userData.email)

         if(data.Candidate[0].email!=userData.email)
         console.log(data.Candidate[0].email);

         // console.log(data.Candidate[0].responseError[0].errorCode+"Not Found   ",data.Candidate[0].responseError[0].errorMessage);
          //console.log(data.Candidate[0].responseError[0].errorCode);
          if(data.Candidate[0].responseError[0].errorCode==401){

          this.errcode=data.Candidate[0].responseError[0].errorCode;
          this.errmsg=data.Candidate[0].responseError[0].errorMessage;
        }
      else{
    console.log("user exists")}});
          // Now sign-in with userData
          
          //     else
          //     alert("User present in the database");
        }
      );
    }

  title = 'app';
}

