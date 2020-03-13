import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapphimService {
  listMovieTheater=[];
  listCumRap=[];
  listLichChieu=[];
  //Output lich chieu
  @Output () lichChieuEmitter=new EventEmitter;
  //Output Cụm rạp
  @Output () CumRapEmitter=new EventEmitter;
  //Output Movie theater list
  @Output () movieTheaterEmitter=new EventEmitter
  constructor() { }
  setLichChieu(lichChieu):void{
    this.listLichChieu=lichChieu;
    this.lichChieuEmitter.emit(this.listLichChieu);
  }
  setMovieTheater(movieTheater):void{
    this.listMovieTheater=movieTheater;
    this.movieTheaterEmitter.emit(this.listMovieTheater);
  }
  setCumRap(cumRap){
    this.listCumRap=cumRap;
    this.CumRapEmitter.emit(this.listCumRap);
  }
}
