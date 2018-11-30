import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DemandeDetailService} from './demande-detail.service';

@Component({
  selector: 'app-demande-detail',
  templateUrl: './demande-detail.component.html',
  styleUrls: ['./demande-detail.component.css']
})
export class DemandeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: DemandeDetailService) { }

  public demandeid;

  private Serv: Object[]

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('_id');

    this.demandeid = id;


    this.service.getService(this.demandeid).subscribe(id=> {this.Serv = id});
  }

}
