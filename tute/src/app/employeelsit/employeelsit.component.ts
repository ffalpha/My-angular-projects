import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelsit',
  templateUrl: './employeelsit.component.html',
  styleUrls: ['./employeelsit.component.css']
})
export class EmployeelsitComponent implements OnInit {


  public Employee=[]; 
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
     this.employeeService.getEmploye().subscribe(data =>this.Employee=data);
      
  }

}
