import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CommentsbynameComponent } from './commentsbyname/commentsbyname.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'user/:id', // path variable
    component:UserDetailsComponent
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },
  {
    path:'employee/:id',
    component:EmployeeDetailsComponent
  },
  {
    path: 'comments',
    component:CommentsComponent
  },
  {
    path:'comment/:id/:name',
    component:CommentsbynameComponent
  },
  {
    path:'comment/:id',
    component:CommentsbynameComponent
  },
  {
    path:'comment',
    component:CommentsbynameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
