import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tods',
  templateUrl: './tods.component.html',
  styleUrls: ['./tods.component.scss']
})
export class TodsComponent implements OnInit {

  public todos:any[] =[]

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getTodosData()
  }

  public getTodosData(){
    this.service.getTodos().subscribe((res:any)=>{
      console.log(res);
      this.todos=res;
    },err=>{
      console.log(err)
    })
  }
}
