import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ngOnInit(){  
  }

  openMenu(element) {
    $(".nav-item").removeClass('active');
    $(element).addClass("active");
  }
}


