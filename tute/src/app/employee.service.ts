import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './example/employee';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="/assets/data/employee.json";
  
  constructor(private http:HttpClient) { }

  getEmploye(): Observable<IEmployee[]>{
     return this.http.get<IEmployee[]>(this.url);
  }
}
