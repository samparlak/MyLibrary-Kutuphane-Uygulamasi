import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { AuthEmailPasswordService } from "./my-library/auth-email-password.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

constructor(private authService:AuthEmailPasswordService,
            private router:Router){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAMR1ZS8EdV0ZMBxOx_qHQXpxj3hCBLD4I",
      authDomain: "my-library-55278.firebaseapp.com"
    });
    this.router.navigate(['/signin']);

  }

  onLogout(){
    this.authService.logout();
    this.authService.socialLogout();
  }


}
