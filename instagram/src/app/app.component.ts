import { Component } from '@angular/core';
import {AngularFireModule}from '@angular/fire';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagram';
}
var firebaseConfig = {
  apiKey: "AIzaSyBvJKrmAyfZyEcXqfLIAcRgVAG2Uac-O1w",
  authDomain: "instagram-e63ae.firebaseapp.com",
  databaseURL: "https://instagram-e63ae.firebaseio.com",
  projectId: "instagram-e63ae",
  storageBucket: "instagram-e63ae.appspot.com",
  messagingSenderId: "527331379617",
  appId: "1:527331379617:web:f143227c9afae013"
};
// Initialize Firebase
AngularFireModule.initializeApp(firebaseConfig);