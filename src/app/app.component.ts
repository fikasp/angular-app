import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ){} 

  ngOnInit() {
    this.checkOverflow()
    window.addEventListener("resize", this.checkOverflow)
  }

  checkOverflow() {
    let windowHeight = window.innerHeight
    let ulHeight = document.querySelector("ul")!.clientHeight
    let h3Height = document.querySelector("h3")!.clientHeight
    let nav = document.querySelector("nav")!

    if (windowHeight < ulHeight + h3Height) {
      nav.style.overflowY = "scroll"
    } else {
      nav.style.overflowY = "hidden"
    }
  }  
}

