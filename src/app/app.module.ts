import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { TabSwitchComponent } from './tab-switch/tab-switch.component';
import { PostComponent } from './post/post.component';
import { SinglePostComponent } from './single-post/single-post.component';
import {BlogService} from './blog.service'
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { OverlayModule } from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageBodyComponent,
    WebdesignComponent,
    TabSwitchComponent,
    PostComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    OverlayModule,
    PortalModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
