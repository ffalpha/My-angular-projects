import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule}from '@angular/fire';
import {AngularFirestoreModule}from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { EmployessComponent } from './employess/employess.component';
import { EmployeeComponent } from './employess/employee/employee.component';
import { EmployeeListComponent } from './employess/employee-list/employee-list.component';
import { EmployeService } from './shared/employe.service';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    EmployessComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
