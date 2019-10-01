import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login : FormGroup
  //incor: any;
  constructor(private http:HttpClient) { 
    this.login = new FormGroup({
      email : new FormControl(''),
      password : new FormControl('')
    })
   }

  ngOnInit() {
  }
open(value){
  let body = {
    email : value.email,
    password : value.password
  }
  this.http.post('https://reqres.in/api/login',body).subscribe(data=>{
console.log(data);
//this.incor=data;
  })
}
}
