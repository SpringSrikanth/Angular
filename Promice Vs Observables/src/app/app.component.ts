import { Component, OnInit } from '@angular/core';
import { BlogService } from './services/blog.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angpromice';
  blogs:any;

  constructor(private api:BlogService){}

  public ngOnInit(){
    this.getBlogs();
    // this.blogs =this.getBlogs2();
  }

  private async getBlogs(){
    console.log("hello")
    // this.api.getBlogs().subscribe((res)=>{
    //   console.log(res?.data.length)
    //   this.blogs=res?.data;
    // },
    // (error)=>{
    //   console.error(error);
    // })

    // this.api.getBlogs().toPromise().then((res)=>{
    //   console.log(res.data.length)
    //   this.blogs= res.data;
    // }).catch((err)=>{console.log(err)})
    
    // const res = await this.api.getBlogs().toPromise();
    // this.blogs = res.data
    // console.log(res.data.length)

    try {
      const res = await this.api.getBlogs().toPromise();
      this.blogs = res.data
      console.log(res.data.length)
    } catch (error) {
      console.log(error.message);
    }

   
    
    console.log("how are you")
  }

  // private getBlogs2(){
  //   return this.api.getBlogs().pipe(map(res=>{
  //     return res
  //   }))
  // }
}
