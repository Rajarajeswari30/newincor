import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
task1 : FormGroup
  totallist: Object;
  constructor(private http:HttpClient) {
this.task1 = new FormGroup({
  userId : new FormControl(),
  id : new FormControl(),
  title : new FormControl(),
  completed : new FormControl()
})
   }

  ngOnInit() {
  }
add(value){
  let body={
    userId : value.userId,
    id : value.id,
    title : value.title,
    completed : value.completed
  }
  this.http.post('https://jsonplaceholder.typicode.com/todos',body).subscribe(data=>{
    console.log(data);
    this.totallist = data;
  })
}
}
