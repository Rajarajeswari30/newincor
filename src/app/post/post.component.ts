import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  totalpost: Object;

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit() {
  }
show(){
  this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
    console.log(data);
    this.totalpost=data
})
}
p11(b) {
  localStorage.setItem("userdata", JSON.stringify(b))
  this.route.navigateByUrl('comments')
}
}