import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
 
  token:String;
 
  constructor(private router:Router) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password).then((res)=>{
        console.log("Kayıt başarılı");
      })
      .catch(error => {
        console.log(error);
        if(error){
          console.log("Kayıt Başarısız");
        }else{
          console.log("Kayıt başarılı.")
        }
      });
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {firebase.auth().currentUser.getIdToken().then((token:string)=>{
        this.token=token;
        console.log("Token : "+token);
        this.router.navigate(['/']);
      })})
      .catch(error => console.log(error));
  }

logout(){
  firebase.auth().signOut();
  this.token=null;
  this.router.navigate(['/signin'])
  console.log("Çıkış Yapıldı.Token silindi.Token : "+this.token);

}


getToken(){
   firebase.auth().currentUser.getIdToken().then((token:string)=>{
    this.token=token;
  });
  return this.token;
}

isAutheticated(){
  return this.token !=null;
}

}
