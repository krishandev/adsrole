import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {BlogService} from '../blog.service'
import { ActivatedRoute } from '@angular/router';
import {ComponentPortal} from '@angular/cdk/portal';
import { Overlay,OverlayRef, ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  singlePosts:any;
  errorMessage:any
  id!:string

  constructor(private blogService:BlogService, private spinner: NgxSpinnerService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id') as string;
    this.getSinglePosts()
  }
getSinglePosts()
{

  this.spinner.show();
    this.blogService.getSinglePosts(this.id).subscribe((data)=>{
      this.singlePosts=data;
      this.spinner.hide();
      console.log(data);
      
    },
    (error)=>{
      this.errorMessage=error.message
      this.spinner.hide();
      console.log(error);
    }
    )

}
}
