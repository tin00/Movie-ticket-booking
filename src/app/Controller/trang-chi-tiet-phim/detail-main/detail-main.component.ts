import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Phim } from "../../models/phim";
import { MovieService } from "../../Service/movie.service";
import { PhimGateWay } from '../../gateWays/phim';

@Component({
  selector: "app-detail-main",
  templateUrl: "./detail-main.component.html",
  styleUrls: ["./detail-main.component.scss"]
})
export class DetailMainComponent implements OnInit {
  movieDetail;
  aaa;
  maPhim: string;
  inForPhim: string = "LichChieu";
  constructor(
    private _activated: ActivatedRoute,
    private _phimService: MovieService,
    private _phimDetail:PhimGateWay
  ) {}
  getMovieDetail(){
    this._phimDetail.LayChiTietPhim(this.maPhim).subscribe((dataDetail)=>{
      this._phimService.setMovieDetail(dataDetail);
      // console.log(this.movieDetail)
    })
  }
  ngOnInit(): void {
    this.movieDetail=this._phimService.movieDetail;
    this._phimService.movieDetailEmitter.subscribe((newMovieDetail)=>{
      this.movieDetail=newMovieDetail;
    })
    this._activated.params.subscribe(result => {
      this.maPhim = result.maPhim;
      // console.log(result);
      this.getMovieDetail();
    });
  }
  chonInForPhim(value) {
    this.inForPhim = value;
    // console.log(this.inForPhim);
    // console.log(this.movieDetail)
  }
}
