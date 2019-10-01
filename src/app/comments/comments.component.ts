import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment:any
  da: any;
  comp=[]
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.da=JSON.parse(localStorage.getItem("userdata"))
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data=>{
      this.comment=data;
    })
    
    setTimeout(()=>{
      this.p11();
    },2000)
  }
  p11()
  {
    for(var i=0;i<this.comment.length;i++)
    {
      if(this.da.userId==this.comment[i].postId)
      {
        this.comp.push(this.comment[i])
      }
    }
    console.log(this.comp);
    }

 }
