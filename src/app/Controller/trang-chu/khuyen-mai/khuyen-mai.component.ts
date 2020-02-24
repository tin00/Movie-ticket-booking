import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.scss']
})
export class KhuyenMaiComponent implements OnInit {
  hinh=[
    {
      hinhAnh1:"../../../../assets/img/vui-tet-cung-zalopay-cgv-mua-1-tang-1-15796786620561.jpg",
      hinhAnh2:"../../../../assets/img/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958493092.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
