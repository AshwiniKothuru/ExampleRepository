import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ="Ashwini";
  password:string ="Ashwini";
  details: Array<Object> = [{email: 'Ashwini', password: 'Ashwini'},{
email: 'prasad' ,password:'Prasad' }]; //array defining

  
  constructor() { }
  
  ngOnInit() {
  }
  
  signIn(){ //this is function 
    var data = {email: this.email, password: this.password};
    this.details.push(data);
  }
  
}
