import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdesign',
  templateUrl: './webdesign.component.html',
  styleUrls: ['./webdesign.component.css']
})
export class WebdesignComponent implements OnInit {

  webdesign:string;
  clutch:string;
  respinsive1:string;
  customWebDesign:string;
  ecommerce:string;
  magento:string;
  shopify:string;
  dynamicWebsite:string;
  seofriendly:string;
  wordpress:string
  phpdevlopment:string;
  professionalteam:string;
  experienced:string;
  qualitycontrol:string;
  personalized:string;
  portfolio:string;
  corporate:string;
  videocontent:string;

  constructor() {
    this.webdesign='assets/webdesign/webdesign.webp';
    this.clutch='assets/webdesign/clutch.webp';
    this.respinsive1='assets/webdesign/responsive4.png';
    this.customWebDesign='assets/webdesign/custom web design.webp'
    this.ecommerce='assets/webdesign/ecommerce.webp'
    this.magento='assets/webdesign/magento.webp'
    this.shopify='assets/webdesign/shopify.webp'
    this.dynamicWebsite='assets/webdesign/dynamicwebsite.webp';
    this.seofriendly='assets/webdesign/seofriendly.webp'
    this.wordpress='assets/webdesign/wordpress.webp'
    this.phpdevlopment='assets/webdesign/phpdevlopment.webp'
    this.professionalteam='assets/webdesign/team.webp'
    this.experienced='assets/webdesign/experienced.webp'
    this.qualitycontrol='assets/webdesign/qualitycontrol.webp'
    this.personalized='assets/webdesign/personalized.webp'
    this.portfolio='assets/webdesign/portfolio.webp'
    this.corporate='assets/webdesign/corporate.webp'
    this.videocontent='assets/webdesign/videocontent.webp'

   }

  ngOnInit(): void {
  }

}
