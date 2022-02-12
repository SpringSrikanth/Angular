import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'searchbyname';
  users: any[] = [
    { id: 1, name: 'Srikanth' },
    { id: 2, name: 'Naveen Kumar' },
    { id: 3, name: 'Sai Kumar' },
    { id: 4, name: 'Krishna Sai' },
    { id: 5, name: 'Rajkumar' },
    { id: 6, name: 'Raju' },
    { id: 7, name: 'Sai Krishna' },
    { id: 8, name: 'Sridhar' },
    { id: 9, name: 'Sai Kiram' }
  ];

  _users: any[] = [];

  ngOnInit() {
    this._users = this.users;
  }

  searchText: any = ''

  searchByName() {
    this._users = this.users.filter((item) => {
      return item.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
}
