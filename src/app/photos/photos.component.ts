import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  da: any;
  photos: any
  comp=[];

  constructor(private http:HttpClient, private route:Router) { }

  ngOnInit() {
    this.da=JSON.parse(localStorage.getItem("data"))
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data=>{
      this.photos=data;
    })
    
    setTimeout(()=>{
      this.p12();
    },2000)
  }
  p12()
  {
    for(var i=0;i<this.photos.length;i++)
    {
      if(this.da.id==this.photos[i].albumId)
      {
        this.comp.push(this.photos[i])
      }
    }
    console.log(this.comp);
    }
    p13(photos){
      localStorage.setItem("photo",JSON.stringify(photos))
      this.route.navigateByUrl("photos1");
    }

}
