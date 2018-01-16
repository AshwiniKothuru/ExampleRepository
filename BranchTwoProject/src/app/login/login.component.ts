import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ="Ashwini";
  password:string ="Ashwini";
  details: Array<Object> = [{email: 'asdf', password: 'sdfvsd'}];
  
  constructor() { }
  
  ngOnInit() {
  }
  
  signIn(){
    var data = {email: this.email, password: this.password};
    this.details.push(data);
  }
  
}
