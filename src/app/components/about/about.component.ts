import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

blogs:Blog[];
 
blog1:Blog;
blog2:Blog;
blog3:Blog;
blog4:Blog;
blog5:Blog;
editMode:boolean=false;
tempblog:Blog;


  constructor(private dataservice: DataService) {

   }

  ngOnInit() {
    // this.blog1 = {id:1,title:'Manage your family\'s data worry-free',body:'If you\'re on a Share EverythingTM plan sign in to MyRogers to monitor data usage, set up fully customizable Real-Time* Alerts, top up or pause data for each member or device that\'s part of the plan.'};
    // this.blog2 = {id:2,title:'John Doe',body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque officiis distinctio voluptates laudantium repellendus amet nihil eveniet repudiandae architecto cum, perspiciatis magni. Delectus soluta ipsam minima magni amet'};
    // this.blog3 = {id:3,title:'View and pay your bills',body:'The fastest and most convenient way to view your bill and make a payment. And our breakdowns and tips help make your online bill easy to understand.'};
    // this.blog4 = {id:4,title:'Change your personal details',body:'Sign in to MyRogers to change your Caller ID.'};
    // this.blog5 = {id:5,title:'Change your device and plan',body:'Want to upgrade to the hottest new device? Time for a new plan? You can do it all here.'};

    this.dataservice.getAboutPageData().subscribe((posts)=>{
      this.blogs= posts;
      this.blog1= posts[0];
      this.blog2= posts[1];
      this.blog3= posts[2];
      this.blog4= posts[3];
      this.blog5= posts[4];
    });
    
  }


  saveData(index:number){
     this.tempblog = this.blogs[index-1];
    this.dataservice.saveUpdatedData(this.tempblog).subscribe((posts)=>{
      this.blogs = posts;
    });
    this.editMode=!this.editMode;
    //alert("hay"+this.tempblog.title);
    

  }

}

interface Blog{
  id:number,
  title:String,
  body:String

}
