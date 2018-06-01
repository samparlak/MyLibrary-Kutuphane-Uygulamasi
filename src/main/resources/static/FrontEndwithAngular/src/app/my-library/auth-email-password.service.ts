import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";
import { AuthService, LinkedinLoginProvider } from "angular5-social-login";
import { FacebookLoginProvider } from "angular5-social-login";
import { GoogleLoginProvider } from "angular5-social-login";
import { SocialUser } from "angular5-social-login";

@Injectable()
export class AuthEmailPasswordService {
  token: String;

  success: String;

  constructor(private router: Router, private socialAuthService: AuthService) {}

  getSuccess() {
    return this.success;
  }

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.success = "Kayıt İşlemi Başarılı.";
        console.log("Kayıt başarılı");
      })
      .catch(error => {
        this.success =
          "Kayıt İşlemi Başarısız.Lütfen geçerli bir email ve parola giriniz.";
        console.log("Kayıt Başarısız : " + error);
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((token: string) => {
            this.token = token;
            console.log("Token : " + token);
            this.router.navigate(["/"]);
          });
      })
      .catch(error => console.log(error));
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(["/signin"]);
    console.log("Çıkış Yapılıyor...Token silindi.Token : " + this.token);
  }

  getToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) => {
        this.token = token;
      });
    return this.token;
  }

  isAutheticated() {
    return this.token != null;
  }

  /* ----------Sosyal Medya Login Logout Register İşlemleri ------------ */

  socialToken: string;
  user: SocialUser;
  authorized: boolean = false;

  socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(
        socialPlatform + " ile giriş yapılıyor.Token : ",
        userData.token
      );
      // Kullanıcı bilgilerini kullanarak giriş yapma
      if (userData != null) {
        this.authorized = true;
        this.user = userData;
        this.socialToken = userData.token;
        this.router.navigate(['/']);
      }
    });
  }

  socialLogout() {
    this.socialAuthService.signOut();
    this.authorized = false;
    this.socialToken = null;
    this.router.navigate(["/signin"]);
    console.log("Sosyal Medyadan Çıkılıyor... ");
  }

  isSocialAuthenticated() {
    return this.authorized;
  }
}
