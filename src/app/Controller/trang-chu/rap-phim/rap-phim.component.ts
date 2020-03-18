import { Component, OnInit } from '@angular/core';
import { rapPhimGateWay } from '../../gateWays/rapPhim';
import { RapphimService } from '../../Service/rapphim.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MovieService } from '../../Service/movie.service';
import { PhimGateWay } from '../../gateWays/phim';

@Component({
  selector: 'app-rap-phim',
  templateUrl: './rap-phim.component.html',
  styleUrls: ['./rap-phim.component.scss']
})
export class RapPhimComponent implements OnInit {
  deMo = [];
  routerDatGhe:string;
  lichChieu=[];
  styleTab: string;
  listMovieTheater;
  listCumRap;
  listMovieShowTime = [];
  constructor(private _movieTheaterGateWay: rapPhimGateWay, private _movieTheaterService: RapphimService, private _movie: MovieService, private _movieGateWay: PhimGateWay) { }

  ngOnInit(): void {
    this.checkLogin()
    this.getMovieTheater()
  }
  // bhd1Select() {
  //   this.statusChonRap = true;
  // }
  // bhd2Select() {
  //   this.statusChonRap = false;
  // }
  getMovieTheater() {
    this.listMovieTheater = this._movieTheaterService.listMovieTheater;
    this._movieTheaterService.movieTheaterEmitter.subscribe((newMovieTheater) => {
      this.listMovieTheater = newMovieTheater;
    })
    this._movieTheaterGateWay.FechRapPhim().subscribe((result) => {
      this._movieTheaterService.setMovieTheater(result)
      console.log(this.listMovieTheater)
    }, (err) => {
      console.log(err)
    })
  }
  getCumRap(maHeThongRap) {
    this.listCumRap = this._movieTheaterService.listCumRap;
    this._movieTheaterService.CumRapEmitter.subscribe((newCumRap) => {
      this.listCumRap = newCumRap;
    })
    this._movieTheaterGateWay.getCumRapTheoHeThong(maHeThongRap).subscribe((result) => {
      this._movieTheaterService.setCumRap(result);
      console.log(this.listCumRap)
    }, (erro) => {
      console.log(erro.error)
    })
  }
  getMovieShowTimeToTheater(maHeThongRap) {

    this.listMovieShowTime = this._movie.movieShowTimeToTheater;
    this._movie.movieShowTimeTheaterEmitter.subscribe((newMovieShowTime) => {
      this.listMovieShowTime = newMovieShowTime;
    })
    this._movieGateWay.LayLichChieuTheoHeThongRap(maHeThongRap).subscribe((result) => {

      for (let i = 0; i < result.length; i++) {
        this._movie.setMovieShowTimeToTheater(result[i].lstCumRap);

      }

      console.log(this.listMovieShowTime)
      // console.log(result)
    }, (err) => {
      console.log(err.errow)
    })
  }
  laymaHeThong(maHeThongRap) {
    this.deMo = []
    // this.getCumRap(maHeThongRap);
    this.styleTab = "height:700px;overflow :auto";
    this.getMovieShowTimeToTheater(maHeThongRap)
  }
  LayDanhSachPhim(maCumRap) {
    this.deMo = []
    this.lichChieu=[]
    for (let n = 0; n < this.listMovieShowTime.length; n++) {
      if (maCumRap === this.listMovieShowTime[n].maCumRap) {
        for (let t = 0; t < this.listMovieShowTime[n].danhSachPhim.length; t++) {
          this.deMo.push(this.listMovieShowTime[n].danhSachPhim[t])
          console.log(this.listMovieShowTime[n].danhSachPhim[t]);
          for(let x=0;x<this.listMovieShowTime[n].danhSachPhim[t].lstLichChieuTheoPhim.length;x++){
            this.lichChieu.push(this.listMovieShowTime[n].danhSachPhim[t].lstLichChieuTheoPhim[x])
            // console.log(this.listMovieShowTime[n].danhSachPhim[t].lstLichChieuTheoPhim[x])
          }
        }
      }
    }
  }
  checkLogin(){
    const login=JSON.parse(localStorage.getItem('credentials'));
    if(login){      
      this.routerDatGhe="/datghe"
    }
  }
}
