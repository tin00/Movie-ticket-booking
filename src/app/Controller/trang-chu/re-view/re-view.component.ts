import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-re-view",
  templateUrl: "./re-view.component.html",
  styleUrls: ["./re-view.component.scss"]
})
export class ReViewComponent implements OnInit {
  hinh = [
    {
      hinhAnh1:
        "../../../../assets/img/review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang-15817967128673.jpg",
      hinhAnh2:
        "../../../../assets/img/review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh-15817958493092.jpg"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
