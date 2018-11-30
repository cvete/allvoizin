import { Component, OnInit } from '@angular/core';
import { DemandesService } from './demandes.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  constructor(private router: Router, private service: DemandesService) { }

  private biens: Object[];


  ngOnInit() {
    this.service.getServices().subscribe(id=> {this.biens = id});
  // this.service.getBiens().subscribe(id => {this.biens = id});
   
  }

  onSelect(demande) {

    this.router.navigate(['/demandes', demande.titre]);
    

  }


}
