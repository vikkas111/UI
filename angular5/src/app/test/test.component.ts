// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.scss']
// })
// export class TestComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map'

export type list = { email: string };

@Component({
  selector: "test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"]
})
export class TestComponent implements OnInit {
 private p:String;

  list: list[];
  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .get("/assets/test.json")
      .map(data => data.json())
      .subscribe(data => {
this.p=data.Candidate[0].email;
        console.log(data.Candidate[0].email);
        alert(data.Candidate[0].responseError.errorCode );
      });
  }
}
