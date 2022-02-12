import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getUsers(pageIndex:number,pageSize:number){
    return this.http.get(`http://localhost:3000/users/${pageIndex}/${pageSize}`)
  }
}
