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

  private serviceoubien: Object[];
  private userparemail: Object[];
  

  ngOnInit() {
    this.service.getServicesOuBien().subscribe(id=> {this.serviceoubien = id});

  }

  onSelect(demande) {

    this.router.navigate(['/demandes', demande.titre]);
    

  }

  



}
