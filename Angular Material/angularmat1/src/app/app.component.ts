import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from './api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularmat1';
  public dataSource:MatTableDataSource<any>;
  public displayedColumns:any[] =['id','name'];
  public pageSize=5;
  public length=0;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private api:ApiService){}
  
  public ngOnInit(): void {
    this.dataSource=new MatTableDataSource([]);
    this.getUsersLength();
    this.loadInitialData(0);
  }

  public getUsersLength(){
    this.api.getAllUsers().subscribe((res:any)=>{
      this.length = res.length;
    },(err)=>{
      console.log('Error while calling getAllUsers method  ' + err);
    })
  }

  public loadInitialData(pageIndex){
    this.api.getUsersByPageIndexPageSize(pageIndex,this.pageSize).subscribe((res:any)=>{
      this.dataSource= new MatTableDataSource(res);
    },(err)=>{
      console.log('Error while calling getUsersByPageIndexPageSize method  ' + err);
    })
  }

  public pagiNavigate(page:PageEvent){
    this.loadInitialData(page.pageIndex)
  }

}
