import { Component, OnInit, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Demo app';
  posts:Post[];
  timer:number=0;
  isHomepage:boolean=true;

  private interval: number; 



  constructor() {

  }


  ngOnInit() {
  }

  isHomepagedisplay(val:boolean){
    this.isHomepage = val;
    console.log(val);
    
  }
  // ngOnDestroy(){
  //   this.alive = false; //turns off the http call
  //   console.log('component distroyed.....');
    
  // }

  

}

interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}