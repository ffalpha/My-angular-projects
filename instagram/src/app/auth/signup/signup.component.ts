import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
     var email=form.value.email;
     var name=form.value.fullname;
     var password=form.value.password;
    auth().createUserWithEmailAndPassword(email,password).then(userData =>{console.log(userData);}).catch(err=>{console.log(err);})
  }
}
