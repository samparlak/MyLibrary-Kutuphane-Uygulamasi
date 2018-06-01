import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthEmailPasswordService } from '../my-library/auth-email-password.service';
import {
  AuthService,
  SocialUser,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private user: SocialUser;
  public authorized: boolean = false;
  

  constructor(private authService:AuthEmailPasswordService,
              private router:Router,
              private socialAuthService: AuthService ) { }
  
              public socialSignIn(socialPlatform : string) {  

                let socialPlatformProvider;
                if(socialPlatform == "facebook"){
                  socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
                }else if(socialPlatform == "google"){
                  socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
                }
                
                this.socialAuthService.signIn(socialPlatformProvider).then(
                  (userData) => {
                    console.log(socialPlatform+" sign in data : " , userData);
                    // Now sign-in with userData        
                    if (userData != null) {
                           this.authorized = true;
                           this.user = userData;               
                        }       
                  }
                );
              }
            
              public signOut(){
                      this.socialAuthService.signOut();
                      this.authorized = false;
                  }
              
            
  
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
