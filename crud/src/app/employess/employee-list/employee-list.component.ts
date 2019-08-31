import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
 
   list:Employee[];
  constructor(private service:EmployeService,private firestore:AngularFirestore,private tostr:ToastrService) { }

  ngOnInit() {
    this.service.getEmployess().subscribe(actionArray =>{
      this.list = actionArray.map(item =>{
        return {
          id:item.payload.doc.id,
          ...item.payload.doc.data()}as Employee;
      })
    });

   
  }
  onEdit(emp:Employee){
    console.log(emp);
    this.service.formData= Object.assign({},emp);
  }

  onDelete(id:string){
    if(confirm("Are you sure want to delte")){
      console.log('employees/' +id)
      this.firestore.doc('employees/' +id).delete();
      this.tostr.warning("Deletede","warning")
    }
  
  
  }

}
