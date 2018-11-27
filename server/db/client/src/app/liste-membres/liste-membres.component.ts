import { Component, OnInit } from '@angular/core';
import {MembresService} from '../liste-membres/membres.service';

@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {

  constructor(private service: MembresService) { }

  private memid: Object[];

  ngOnInit() {
	this.service.getMembres().subscribe(id=> {this.memid = id });
  }

}
