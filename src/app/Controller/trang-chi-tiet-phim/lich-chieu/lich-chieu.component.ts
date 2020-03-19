import { Component, OnInit } from '@angular/core';
import { rapPhimGateWay } from '../../gateWays/rapPhim';
import { RapphimService } from '../../Service/rapphim.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})

export class LichChieuComponent implements OnInit {
  login
  tenPhim: string;
  routerDatVe: string;
  listRapPhim = [];
  listLichChieu = [];
  listCumRap = [];
  listLichChieuCumRap = [];
  maPhim: string
  hinhAnhPhim: string
  styleHeight: string;
  constructor(private _movieTheaterAPI: rapPhimGateWay, private _movieTheaterService: RapphimService, private _ma: ActivatedRoute) { }

  ngOnInit(): void {
    this.login = JSON.parse(localStorage.getItem("credentials"));
  
    this.getMovieTheater()
    this._ma.params.subscribe(result => {
      this.maPhim = result.maPhim;
      this.getLichChieu(this.maPhim);
    })
  }
  getMovieTheater() {
    this.listRapPhim = this._movieTheaterService.listMovieTheater;
    this._movieTheaterService.movieTheaterEmitter.subscribe((newRapPhim) => {
      this.listRapPhim = newRapPhim;
    })
    this._movieTheaterAPI.FechRapPhim().subscribe((result) => {
      this._movieTheaterService.setMovieTheater(result);
      console.log(this.listRapPhim)
    }, (err) => {
      console.log(err.error)
    })
  }
  getLichChieu(maPhim) {
    this.listLichChieu = this._movieTheaterService.listLichChieu;
    this._movieTheaterService.lichChieuEmitter.subscribe((newLichChieu) => {

      this.listLichChieu = newLichChieu;
    })
    this._movieTheaterAPI.getLichChieuTheoPhim(maPhim).subscribe((data) => {
      this._movieTheaterService.setLichChieu(data.heThongRapChieu)
      this.tenPhim = data.tenPhim
      this.hinhAnhPhim = data.hinhAnh
      console.log(this.listLichChieu);
    }, (err) => {
      console.log(err.error)
    })
  }
  cumRap(cumRap) {
    this.listCumRap = cumRap;
    console.log(this.listCumRap)
  }
  LayLichChieuPhim(lich) {
    this.listLichChieuCumRap = lich;
    this.styleHeight = "height:700px; overflow:auto"
    console.log(this.listLichChieuCumRap)
  }
  RouteDatVe() {     
    if (this.login) {
      this.routerDatVe = "/datghe";
    }else{
      alert("Vui lòng đăng nhập")
    }
  }
}
