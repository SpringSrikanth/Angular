import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule , Routes} from "@angular/router";
import { ContactComponent } from '../../app/contact/contact.component';
import { AboutComponent } from '../../app/about/about.component';
const routes:Routes =[
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];
@NgModule({
  imports: [
   
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingtModule { }
