import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { AuthService } from "./my-library/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "app";

constructor(private authService:AuthService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAMR1ZS8EdV0ZMBxOx_qHQXpxj3hCBLD4I",
      authDomain: "my-library-55278.firebaseapp.com"
    });
  }

  onLogout(){
    this.authService.logout();
  }


}
