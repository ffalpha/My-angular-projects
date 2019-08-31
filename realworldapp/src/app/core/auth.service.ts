import { Injectable } from '@angular/core';
import {Route, Router} from '@angular/router';//We can redirect users after regsitration
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import  'rxjs/add/operator/switchMap';
interface user{
  uid:string;
  email:string;
  photoURL?:string;
  displayName?:string;
  NIC?:string;
  TPnumber?:string;
  Address?:string;
  Dateofbirth?:string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<user>

  constructor(
    private afAuth:AngularFireAuth,
    private afs:AngularFirestore,
    private router:Router,
  ) { }
}
