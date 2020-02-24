import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.scss']
})
export class DienAnhComponent implements OnInit {
  hinh=[
    {
      hinhAnh1:"../../../../assets/img/983f1fe055c66903861386a7646873d1.jpg",
      hinhAnh2:"../../../../assets/img/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958493092.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
