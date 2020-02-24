import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  dangChieuStatus:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
 isMoving(){
   this.dangChieuStatus=true;
 }
 willMoving(){
   this.dangChieuStatus=false;
 }
}
