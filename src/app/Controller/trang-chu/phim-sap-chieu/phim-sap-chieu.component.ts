import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit,AfterViewInit {
  DanhSachPhimSapChieu = [
    {tenPhim:"Thor: Ragnarok",hinhAnh:'../../../assets/img/thor-ragnarok-15088151416399.jpg'},
    {tenPhim:"Ferdinand",hinhAnh:'../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg'},
    {tenPhim:"Trùm Hương Cảng",hinhAnh:'../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg'},
    {tenPhim:"Ferdinand",hinhAnh:'../../../assets/img/ferdinand.jpg'},
    {tenPhim:"Trải nghiệm điểm chết",hinhAnh:'../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:4
          }
      }
  })
  }
}
