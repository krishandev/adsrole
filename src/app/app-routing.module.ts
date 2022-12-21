import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { PostComponent } from './post/post.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path:'webdesign',
    component:WebdesignComponent
  },
  {
    path:'',
    component:HomepageBodyComponent
  },
  {
    path:'posts',
    component:PostComponent
  },
  {
    path:'posts/:post_slug',
    component:SinglePostComponent
  },
  {
    path:'**',
    redirectTo:'posts',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
