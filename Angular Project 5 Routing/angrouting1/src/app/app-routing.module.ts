import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { EmployeesComponent } from './employees/employees.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'comments',
    component:CommentsComponent
  },
  {
    path:'employees',
    component:EmployeesComponent
  },
  {
    path:'tutorials',
    component:TutorialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // for is for only firstime routing module 
  exports: [RouterModule]
})
export class AppRoutingModule { }
