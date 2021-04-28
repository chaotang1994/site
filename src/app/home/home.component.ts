import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  ScrollIntoView(elem: string) {
    document.querySelector(elem).scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
