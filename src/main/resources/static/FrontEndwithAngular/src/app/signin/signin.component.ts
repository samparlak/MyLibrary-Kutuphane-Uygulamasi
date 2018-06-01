import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEmailPasswordService } from '../my-library/auth-email-password.service';
import { SocialUser, AuthService } from 'angular5-social-login';
import { FacebookLoginProvider } from 'angular5-social-login';
import { GoogleLoginProvider } from 'angular5-social-login';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  

  constructor(private authService:AuthEmailPasswordService,
              private router:Router
              ) { }
  
             
            
  
  ngOnInit() {
    /* let token=this.authService.getToken();
    console.log(token); */
  }

  redirectToSignUp(){
    this.router.navigate(['/signup']);
  }

  /* --------------Email ve Parola ile Giriş---------------- */

  onSignin(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signinUser(email,password);
  }

  socialSignIn(social:string){
    this.authService.socialSignIn(social);
  }

}
