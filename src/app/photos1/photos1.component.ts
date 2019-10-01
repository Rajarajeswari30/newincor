import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos1',
  templateUrl: './photos1.component.html',
  styleUrls: ['./photos1.component.css']
})
export class Photos1Component implements OnInit {
  photodata: any;

  constructor() { }

  ngOnInit() {
    this.photodata=JSON.parse(localStorage.getItem("photo"))
  }
}
