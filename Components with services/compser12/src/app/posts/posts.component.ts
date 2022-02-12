import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts:any[] =[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getPostsData()
  }

  public getPostsData(){
    this.service.getPosts().subscribe((res:any)=>{
      console.log(res);
      this.posts=res;
    },err=>{
      console.log(err)
    })
  }

}
