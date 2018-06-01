import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class AuthEmailPasswordService {
  token: String;

  success: String;

  constructor(private router: Router) {}

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
        this.success = "Kayıt İşlemi Başarısız.Lütfen geçerli bir email ve parola giriniz.";
        console.log("Kayıt Başarısız : "+error);
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
    console.log("Çıkış Yapıldı.Token silindi.Token : " + this.token);
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
}
