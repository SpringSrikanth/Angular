import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes:Routes=[
  {
    path:'users',
    component:UsersComponent,
  },
  {
    path:'roles',
    component:RolesComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
