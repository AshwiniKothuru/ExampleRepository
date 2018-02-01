import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS,Validator,
  Validators,AbstractControl,ValidatorFn } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string ="Ashwini.k@g.com";
  password:string ="Ashwini";
  details: Array<Object> = [{email: 'Ashwini.k@g.com', password: 'Ashwini'
 }]; //array defining
 isValidFormSubmitted = false;
 validateEmail = true;
 emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 submitted = false;
  constructor() { }
  
  ngOnInit() {
  }
  
  signIn(){ //this is sign-in function 
    this.submitted = true;
    var data = {email: this.email, password: this.password};
    this.details.push(data);
  }
  
}
