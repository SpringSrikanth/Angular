import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from "@angular/common/http";
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserAlbumsComponent } from './user-albums/user-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    UsersListComponent,
    UserInfoComponent,
    UserHeaderComponent,
    UserPostsComponent,
    UserAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
