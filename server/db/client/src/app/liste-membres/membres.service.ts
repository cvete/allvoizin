import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class MembresService {
  constructor(private http:HttpClient) { }

   getMembres(): Observable<any> {
     let observable: Observable<any>;
     observable =  this.http.get("http://localhost:3000/inscription");
     console.log(observable);
     return observable;
  }

}


