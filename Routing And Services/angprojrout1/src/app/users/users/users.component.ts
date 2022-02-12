import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../api/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users:any[] =[];
  public totalPages= new Set();
  public selectedPage=1;

  constructor(private service:UserServiceService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }
  getUserInfo() {
    this.service.getUsers().subscribe((res:any)=>{
      console.log(res);
      for (let index = 1; index <= res.total_pages; index++) {
        this.totalPages.add(index)
      }
      this.users= res.data;
    },
    err=>{
      console.log('Error  ',err)
    })
  }

  getUsersByPage(value){
    this.selectedPage=value;
    this.service.getUsersByPage(value).subscribe((res:any)=>{
      console.log(res);
      for (let index = 1; index <= res.total_pages; index++) {
        this.totalPages.add(index)
      }
      this.users= res.data;
    },
    err=>{
      console.log('Error  ',err)
    })
  }

}
