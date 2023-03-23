import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute){}

  ngOnInit(){
    this.activatedroute.fragment.subscribe((value)=>{
     console.log(value);
    })
  }
}
