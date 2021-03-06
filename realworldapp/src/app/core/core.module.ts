import { NgModule } from '@angular/core';
import {AuthService} from './auth.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import {AngularFirestoreModule}   from '@angular/fire/firestore'
import {AngularFireStorageModule}   from '@angular/fire/storage'
import {AngularFireAuthModule}   from '@angular/fire/auth'
@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    AuthModule ,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers :[AuthService]
})
export class CoreModule { }
