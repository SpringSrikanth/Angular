import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserList } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable<UserList>{
    return <any>this.http.get('https://reqres.in/api/users');
  }

  public getUsersByPage(pageId:any):Observable<UserList>{
    return <any>this.http.get(`https://reqres.in/api/users?page=${pageId}`);
  }

  public getUserById(userId):Observable<User>{
    return <any>this.http.get(`https://reqres.in/api/users/${userId}`);
  }
}
