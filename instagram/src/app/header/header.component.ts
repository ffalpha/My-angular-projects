import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
  constructor() { }

  ngOnInit() {
   
  }

}
