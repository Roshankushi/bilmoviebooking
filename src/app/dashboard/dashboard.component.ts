import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }
slidesDidLoad(slides){
  slides.startAutoplay();
}
slidesDidLoad2(slides2){
  slides2.startAutoplay();
}
  ngOnInit() {}

}
