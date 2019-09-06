import { Component, OnInit } from '@angular/core';
import { Airplane } from '../airplane';
import { AirplaneService } from '../airplane.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-create-airplane',
  templateUrl: './create-airplane.component.html',
  styleUrls: ['./create-airplane.component.css']
})
export class CreateAirplaneComponent implements OnInit {
  airplane: Airplane = new Airplane();
  submitted = false;

  message: string;

  constructor(private airplaneService: AirplaneService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      var param = params["airplane"];

      if(param != undefined && param != ""){
        this.airplane = JSON.parse(param);
      }
    });
   }

  ngOnInit() {
    $(function(){
      $("#createBtn").click(function (){
        if($("#code").val() == '' || $("#model").val() == '' || $("#passengers").val() == ''){
          $(".message").removeClass("message");
        }
        else{
          $("#hiddenBtn").click();
        }
      });
    });     
  }

  newAirplane(): void {
    this.submitted = false;
    this.airplane = new Airplane();
  }

  save() {
    if(this.airplane.id == 0 || this.airplane.id == undefined) {
      this.airplaneService.createAirplane(this.airplane)
        .subscribe(data => console.log(data), error => console.log(error));
    }
    else {
      this.airplaneService.updateAirplane(this.airplane)
        .subscribe(data => console.log(data), error => console.log(error));
    }

    this.submitted = true;
    this.airplane = new Airplane();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
