import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestserviceService {

  constructor(private httpClient:Http) { }

  getCountries():Observable<any>{
    return this.httpClient.get("https://api.covid19api.com/countries");     
  }
}
