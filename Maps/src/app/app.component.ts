import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mapproj1';
  users = [
    {id:1 , firstName:'Srikanth' ,lastName:'Yenagandula', std:'BTech'},
    {id:2 , firstName:'Raju' ,lastName:'Dusa', std:'BTech'},
    {id:3 , firstName:'Sai' ,lastName:'Lagishetti', std:'BTech'},
    {id:4 , firstName:'Naveen' ,lastName:'Rapelli', std:'BTech'},
    {id:5 , firstName:'Krishna' ,lastName:'Rapelli', std:'BTech'}
  ];

  private _selectedUser = null

  userMap:any= new Map();

  public set selectedUser(value){
    this._selectedUser=value;
  }
  
  public get selectedUser(){
    return this._selectedUser;
  }

  ngOnInit(){
    this.users.forEach(item => {
      this.userMap.set(item.id,item);
    });
  }

  selected(id){
    this.selectedUser = this.userMap.get(id);
  }

  getValuesFromMap(){
    return this.userMap.values() ? Array.from(this.userMap.values()) : []
  }
}
