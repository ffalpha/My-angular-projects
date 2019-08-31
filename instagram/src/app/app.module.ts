import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignupComponent } from './auth/signup/signup.component';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import { RouteGuard } from './auth/routegurad';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllPostsComponent,
    FollowingComponent,
    FavouritesComponent,
    MyPostsComponent,
    SignupComponent,

    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    //AngularFireModule.initializeApp(environment.firebaseconfig),
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
