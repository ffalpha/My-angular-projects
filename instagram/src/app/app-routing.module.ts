import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FollowingComponent } from './following/following.component';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RouteGuard } from './auth/routegurad';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'following',component:FollowingComponent,canActivate:[RouteGuard]},
  {path:'favourites',component:FavouritesComponent,canActivate:[RouteGuard]},
  {path:'myposts',component:MyPostsComponent,canActivate:[RouteGuard]},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
