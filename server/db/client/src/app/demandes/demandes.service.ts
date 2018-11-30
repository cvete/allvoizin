import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class DemandesService {
  constructor(private http:HttpClient) { }

 

  getServicesOuBien(): Observable<any> {
    let observable: Observable<any>;
    observable =  this.http.get("http://localhost:3000/demande/soub");
    console.log(observable);
    return observable;
 }

}

