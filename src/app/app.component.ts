import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-page';
  sidenav_opened=true;
  constructor(){}
  ngOnInit(): void {

  }

  onclick(){
    if (this.sidenav_opened == true){
      this.sidenav_opened = false;
    }else{
      this.sidenav_opened = true;
    }
  }


}
