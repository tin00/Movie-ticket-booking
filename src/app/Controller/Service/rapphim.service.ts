import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RapphimService {
  listMovieTheater=[];
  listCumRap=[];
  //Output Cụm rạp
  @Output () CumRapEmitter=new EventEmitter;
  //Output Movie theater list
  @Output () movieTheaterEmitter=new EventEmitter
  constructor() { }
  setMovieTheater(movieTheater):void{
    this.listMovieTheater=movieTheater;
    this.movieTheaterEmitter.emit(this.listMovieTheater);
  }
  setCumRap(cumRap){
    this.listCumRap=cumRap;
    this.CumRapEmitter.emit(this.listCumRap);
  }
}
