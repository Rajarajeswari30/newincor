import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  totallist: Object;

  constructor(private http:HttpClient) {

   }

  ngOnInit() {
  }
submit(){
  
  this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
    console.log(data);
    this.totallist=data;
  })
}
}
