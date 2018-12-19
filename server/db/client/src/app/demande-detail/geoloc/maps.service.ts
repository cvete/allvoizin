import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

interface location {

 latitude : string;
 longitude : string;

} 


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  Geolocation(){

    return this.http.get<location>('http://api.ipapi.com/api/check?access_key=74a38c743d2aabee2205dcd4aafddaaa');

  }

}
