import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './homepage-body/homepage-body.component';
import { WebdesignComponent } from './services/webdesign/webdesign.component';

const routes: Routes = [
  {
    path:'webdesign',
    component:WebdesignComponent
  },
  {
    path:'',
    component:HomepageBodyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
