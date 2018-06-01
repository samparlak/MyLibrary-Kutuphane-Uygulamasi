import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEmailPasswordService } from '../my-library/auth-email-password.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  

  constructor(private authService:AuthEmailPasswordService,
              private router:Router) { }
  
  
  ngOnInit() {
    /* let token=this.authService.getToken();
    console.log(token); */
  }

  onSignin(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signinUser(email,password);
  }



}
