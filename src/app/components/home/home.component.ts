import { Component, OnInit} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { SafeResourceUrl,DomSanitizer} from '@angular/platform-browser';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Post[];
  url:SafeResourceUrl;

  showFeedback:boolean;


  constructor(private dataservice: DataService) { 
    
  }

  ngOnInit() {
    this.dataservice.getData().subscribe((posts)=>{
      this.posts = posts;
    });
    this.showFeedback=false;
  }

  showFeedbackWindow(val:boolean){
    this.showFeedback=val;
  }

}


interface Post{
  id:number,
  title:string,
  body:string,
  userId:number
}