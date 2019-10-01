import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
//import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PostComponent } from './post/post.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { Photos1Component } from './photos1/photos1.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //SignupComponent,
    DashboardComponent,
    TaskComponent,
    Task1Component,
    PostComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent,
    Photos1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
