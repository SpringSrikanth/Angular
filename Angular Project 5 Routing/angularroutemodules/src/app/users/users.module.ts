import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes:Routes=[
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'user-details',
    component:UserDetailsComponent
  },
  {
    path:'user-edit',
    component:UserEditComponent
  }
]


@NgModule({
  declarations: [UsersComponent, UserDetailsComponent, UserEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersModule { }
