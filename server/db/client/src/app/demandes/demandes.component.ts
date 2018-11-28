import { Component, OnInit } from '@angular/core';
import { DemandesService } from './demandes.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  constructor(private service: DemandesService) { }

  private biens: Object[];


  ngOnInit() {
    this.service.getServices().subscribe(id=> {this.biens = id});
  // this.service.getBiens().subscribe(id => {this.biens = id});
   
  }
}
