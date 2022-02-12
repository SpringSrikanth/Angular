import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'users',
    loadChildren: () => import('./users/users.module').then((m)=>{return m.UsersModule})
  },
  {
    path:'roles',
    loadChildren: () => import('./roles/roles.module').then((m)=>{return m.RolesModule})
  },
  {
    path:'employees',
    loadChildren: () => import('./employees/employees.module').then((m)=>{return m.EmployeesModule})
  },
  {
    path:'comments',
    loadChildren: () => import('./comments/comments.module').then((m)=>{return m.CommentsModule})
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
