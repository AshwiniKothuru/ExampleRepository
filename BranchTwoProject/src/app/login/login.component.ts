import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
labelName:string ="Ashwini";
inputName:string;
inputEmail:string;
inputPassword:string;
signIn(){
this.inputName="";
}
  constructor() { }

  ngOnInit() {
  }

}
