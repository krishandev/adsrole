import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-body',
  templateUrl: './homepage-body.component.html',
  styleUrls: ['./homepage-body.component.css']
})
export class HomepageBodyComponent implements OnInit {

  alphamindImg: string;
  rondavisImg:string;
  adoreImg:string;
  chismImg:string;
  sellyourhomejerseyImg:string;
  astagingcompanyImg:string;
  svgBgImg:String;

  constructor() {
    this.alphamindImg='assets/alphamind.jpg'
    this.rondavisImg='assets/rondavis.jpg'
    this.adoreImg='assets/adore.jpg'
    this.chismImg='assets/chism.jpg'
    this.sellyourhomejerseyImg='assets/sellyourhomejersey.com_.png'
    this.astagingcompanyImg='assets/astagingcompany.com_.png'
    this.svgBgImg='assets/svg-png.png'
   }

  ngOnInit(): void {
  }



}
