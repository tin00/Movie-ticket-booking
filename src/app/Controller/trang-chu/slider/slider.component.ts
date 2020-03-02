import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    $(".youtube-link").grtyoutube();
  }
  ngAfterViewInit(){
  }
}
