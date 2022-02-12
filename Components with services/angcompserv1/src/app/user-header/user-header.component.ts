import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  public _data:any=[]

  public companies = new Set();

  constructor() { }

  @Input() public set data(val:any[]){
    if(val && val.length!==0){
      console.log(val)
      for (let index = 0; index < val.length; index++) {
        const element = val[index];
        this.companies.add(element?.company?.name)
      }
      this._data = val
    }
  }


  ngOnInit(): void {
  }

}
