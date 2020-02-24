import { Component, OnInit, AfterContentInit } from '@angular/core';
import $ from 'jquery';
declare var $:any
@Component({
  selector: 'app-moblie-app',
  templateUrl: './moblie-app.component.html',
  styleUrls: ['./moblie-app.component.scss']
})
export class MoblieAppComponent implements OnInit,AfterContentInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(){
    $(document).ready(function(){
      $('.single-item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
  }
}
