import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  users:any[]=[]

  userDetails:any;

  ngOnInit(): void {
    this.loadUsersInfo();
  }

  public loadUsersInfo(){
    this.userService.getUsers().subscribe((res)=>{
      console.log(res);
      this.users = res;
      this.userDetails = this.users.length !==0 ? this.users[0] : null; 
    },
    err=>{
      console.log('error occuring while calling loadUsersInfo()',err)
    });
  }

  public selectedUser(value){
    console.log(value);
    this.userDetails = value;
  }

}
