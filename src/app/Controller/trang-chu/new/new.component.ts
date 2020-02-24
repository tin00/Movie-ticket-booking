import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  loaiTinTuc:string="DienAnh";
  constructor() { }

  ngOnInit(): void {
  }
  chonLoaiTin(value){
    this.loaiTinTuc=value;
  }
}
