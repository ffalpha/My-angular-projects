import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  
  constructor() { }

  getEmploye(){
    return [
      {"id":2,"name":"Andrew","Age":1130},
      {"id":13,"name":"Andrew","Age":430},
      {"id":1,"name":"Andrew","Age":230},
      {"id":1,"name":"Andrew","Age":130},
    ]
  }
}
