import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngularMat';
  public dataSource: any = new MatTableDataSource([]);
  public selectedRow= -1;

  public displayedColumns: string[] = [
    'firstName',
    'secondName',
    'userName',
    'gender',
    'dob',
    'mobile',
    'email',
    'email_Verified'
  ];
  public pageSize = 10;
  public totalCount= 0;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getUsers(0, this.pageSize);
  }

  getUsers(pageIndex: number, pageSize: number) {
    this.api.getUsers(pageIndex, pageSize).subscribe(
      (res:any) => {
        console.log(res);
        this.totalCount =res.totalCount;
        this.dataSource = new MatTableDataSource(res.users);
      },
      (error) => {
        console.error(error.message);
      }
    );
  }

  pageNavigate(page:PageEvent){
    console.log(page.pageIndex);
    this.getUsers(page.pageIndex, this.pageSize);
  }

  selected(row:any){
    console.log(row)
    this.selectedRow = row._id;
  }
}
