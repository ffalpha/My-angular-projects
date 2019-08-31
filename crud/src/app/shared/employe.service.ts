import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  formData:Employee

  constructor(private firestore:AngularFirestore) { }


  getEmployess(){
    return this.firestore.collection('employees').snapshotChanges();
    
  }
   
  
}
