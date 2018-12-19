import { Component, OnInit } from '@angular/core';
import{MapsService} from './maps.service' 

@Component({
  selector: 'app-geoloc',
  templateUrl: './geoloc.component.html',
  styleUrls: ['./geoloc.component.css']
})
export class GeolocComponent implements OnInit {

  
  lat: string = '';
  lng: string = '';

  location : Object;

  constructor(private map : MapsService) { }

   

  ngOnInit() {

    this.map.Geolocation().subscribe(data=>{
      console.log(data);
      this.lat =data.latitude;
      this.lng = data.longitude;
    } )
  }

}
