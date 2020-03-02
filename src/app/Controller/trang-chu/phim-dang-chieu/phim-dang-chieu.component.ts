import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from "@angular/core";
import $ from "jquery";

import { Phim } from "../../models/phim";
import { PhimGateWay } from "../../gateWays/phim";
import { MovieService } from "../../Service/movie.service";

declare var $: any;
@Component({
  selector: "app-phim-dang-chieu",
  templateUrl: "./phim-dang-chieu.component.html",
  styleUrls: ["./phim-dang-chieu.component.scss"]
})
export class PhimDangChieuComponent implements OnInit {
  listMoving: Phim[] = [
    // {tenPhim:"The Walking Dead",hinhAnh:'../../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg'},
    // {tenPhim:"Ferdinand",hinhAnh:'../../../../assets/img/ferdinand.jpg'},
    // {tenPhim:"Ngắm Pháo Hoa",hinhAnh:'../../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg'},
    // {tenPhim:"Nhóc Ma Siêu Quậy",hinhAnh:'../../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg'},
    // {tenPhim:"Trải nghiệm điểm chết",hinhAnh:'../../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg'},
  ];
 
  constructor(
    private _movie: MovieService,
    private _phimService: PhimGateWay,
    private cdr: ChangeDetectorRef
  ) {}

  async getPhim() {
    this.listMoving = this._movie.movieList;
    this._movie.movieListEmitter.subscribe(newList => {
      this.listMoving = newList;
    });

     this._phimService.FechDanhSachPhim().subscribe(
      res => {
        console.log(res);
        this._movie.setMovieList(res);
      },
      err => {
        console.log(err);
      }
    );
  }

   ngOnInit() {
     this.getPhim();
  }

}
