import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../api/user-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  public userId:any;
  public userInfo:any;

  constructor(private activatedRoute:ActivatedRoute,private api:UserServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.userId = params.get('id');
      this.getUserInfo();
    })
  }

  public getUserInfo(){
    this.api.getUserById(this.userId).subscribe((res:User)=>{
      console.log(res);
      this.userInfo=res.data;
    },err=>{
      console.log(err)
    })
  }

}
