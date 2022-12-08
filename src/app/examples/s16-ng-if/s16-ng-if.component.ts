import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s16-ng-if',
  templateUrl: './s16-ng-if.component.html',
  styleUrls: ['./s16-ng-if.component.css']
})
export class S16NgIfComponent {

  day = new Date().getDay();
  show = true;

}