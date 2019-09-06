import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Airplane } from '../airplane';

@Component({
  selector: 'app-airplane-details',
  templateUrl: './airplane-details.component.html',
  styleUrls: ['./airplane-details.component.css']
})
export class AirplaneDetailsComponent implements OnInit {
  @Input() airplane: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.airplane = JSON.parse(params["airplane"]);
    });

    console.log(this.airplane);
  }

  ngOnInit() {
  }
}
