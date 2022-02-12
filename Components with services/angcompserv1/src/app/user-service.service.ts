import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  public getUsers():Observable<any>{
    return <any>this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
