import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeDetailService {

  

  constructor(private http:HttpClient) { }

  getService(newid): Observable<any> {
    let observable: Observable<any>;
    observable =  this.http.get("http://localhost:3000/demande/soub/" + newid);
    console.log(observable);
    return observable;
 }




}
