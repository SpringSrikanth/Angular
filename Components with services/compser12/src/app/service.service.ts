import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  public getPhotos(){
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  public getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  public getAlbums(){
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }

  public getTodos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
