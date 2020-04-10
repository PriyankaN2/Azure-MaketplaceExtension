import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
user:string;
pwd:string;

constructor(private router : Router) {}

login() {
  if(this.user == ("ip") && this.pwd == "114"){
    
    console.log("will generate the report");
  } else {
    alert("Invalid Credentials...");
  }
}
  ngOnInit() {
  }

}