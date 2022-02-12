import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL= 'https://my-json-server.typicode.com/springsrikanth/json_server';
  constructor(private http:HttpClient) { }

  public getAllUsers(){
    return this.http.get(this.BASE_URL+'/users');
  }

  public getUsersByPageIndexPageSize(pageIndex,pageSize){
    return this.http.get(`${this.BASE_URL}/users?_page=${pageIndex}&_limit=${pageSize}`);
  }
}
