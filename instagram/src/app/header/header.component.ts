import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
  constructor() { }

  ngOnInit() {
     this.check()
  }

  check(){
   /* auth().onAuthStateChanged(userData =>{
      //Checking we are logged in or not display the header components
      if(userData && userData.emailVerified){
        this.isLoggedIn=true;
      }else{
         this.isLoggedIn=false;
      }
    });*/
  }

}
