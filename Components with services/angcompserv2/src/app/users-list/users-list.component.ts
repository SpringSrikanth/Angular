import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  _usersData:any[] = [];

  @Input() selectedUser:any;
  @Output() selectedUserInfo:EventEmitter<any> = new EventEmitter();

  constructor() { }

  @Input()
  public set usersData(value:any){
    console.log(value)
    if(value){
      this._usersData =value;
    }
  }

  public get usersData(){
    return this._usersData;
  }


  ngOnInit(): void {
  }

  public selectedItem(user:any){
    console.log(user)
    this.selectedUserInfo.emit(user);
  }

}
