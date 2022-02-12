import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:any[] =[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getUsersData()
  }

  public getUsersData(){
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      this.users=res;
    },err=>{
      console.log(err)
    })
  }

}
