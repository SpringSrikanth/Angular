import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  {
    path:'',
    component:CommentsComponent
  },
  {
    path:'comment-details',
    component:CommentDetailsComponent
  },
  {
    path:'comment-details-edit/:id',
    component:CommentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
