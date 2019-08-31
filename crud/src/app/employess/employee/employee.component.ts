import { Component, OnInit } from '@angular/core';
import { EmployeService } from 'src/app/shared/employe.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeService,
    private firestore: AngularFirestore,
    private tosater: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,//used to identfiy a document
      fullName: '',
      empCode: '',
      position:'',
      mobile: '',
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({},form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('employees').add(data)
      this.resetForm(form);
      this.tosater.success('Contagalr', "New Post submiitede")
    }else{
      this.firestore.doc('employees/'+form.value.id).update(data);
      this.tosater.show("updatede details","Conrgaulations");
    }
     
    
  

    //this.tosater.error('Error',"New Post submiitede")
  }

}
