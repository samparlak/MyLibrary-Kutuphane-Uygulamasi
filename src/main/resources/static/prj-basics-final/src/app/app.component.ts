import { Component,OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

loadedName:string='';

onNavigate(feature:string){
this.loadedName=feature;
}

ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyAtvOkG2J1J-UJivDzTseX7FJkae4jF0Ic",
    authDomain: "ng-recipe-book-2c136.firebaseapp.com"
  })
}

}
