import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { UserServiceService } from './api/user-service.service';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'user-info/:id',
    component:UserInfoComponent
  },
  {
    path:'create-user',
    component:CreateUserComponent
  }
]

@NgModule({
  declarations: [UsersComponent, UserInfoComponent, CreateUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[UserServiceService]
})
export class UsersModule { }
