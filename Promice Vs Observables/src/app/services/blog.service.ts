import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  public getBlogs():Observable<any>{
    return <any>this.http.get('https://fakerapi.it/api/v1/persons');
  }
}
