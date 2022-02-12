import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  constructor(private api:UserServiceService) { }
  _userId:any;
  posts:any[]=[];

  @Input()
  public set userId(value:any){
    if(value){
      this._userId =value;
      this.api.getPosts().subscribe((res)=>{
        this.posts = res.filter(({userId})=>{return userId==this._userId});
        console.log(this.posts);
        
      },(err)=>{
        console.log(err)
      })

    }
  }
  ngOnInit(): void {
  }

}
