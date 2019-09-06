import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Airplane } from '../airplane';
import { AirplaneService } from '../airplane.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-airplane-list',
  templateUrl: './airplane-list.component.html',
  styleUrls: ['./airplane-list.component.css']
})

export class AirplaneListComponent implements OnInit {
  airplanes: Observable<Airplane[]>;
  airplane: Airplane;

  constructor(private airplaneService: AirplaneService, private router : Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.airplanes = this.airplaneService.getAirplaneList();
  }

  deleteAirplane(id: number) {
    this.airplaneService.deleteAirplane(id)
      .subscribe(data => {
        console.log(data);
        this.reloadData();
      }, error => console.log(error));
  }

  details(airplane: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "airplane": JSON.stringify(airplane)
      }
    };
    this.router.navigate(["airplane"], navigationExtras)
  }

  edit(airplane: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "airplane": JSON.stringify(airplane)
      }
    };
    this.router.navigate(["add"], navigationExtras)
  }
}
