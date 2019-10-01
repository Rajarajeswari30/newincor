import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { Photos1Component } from './photos1/photos1.component';


const routes: Routes = [

  {path:"",component:LoginComponent},
  // {path: 'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:"task",component:TaskComponent},
  {path:"task1",component:Task1Component},
  {path:'post',component:PostComponent},
  {path:'comments',component:CommentsComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'photos',component:PhotosComponent},
  {path:"photos1",component:Photos1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
