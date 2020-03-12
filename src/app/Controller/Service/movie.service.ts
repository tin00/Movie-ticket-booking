import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList=[];
  movieDetail;
  movieShowTimeToTheater=[];
  //Output Movie List to system theater
  @Output() movieShowTimeTheaterEmitter = new EventEmitter();
  //Output Movie List
  @Output() movieListEmitter =new EventEmitter();
  //Output movie Detail
  @Output() movieDetailEmitter= new EventEmitter();
  setMovieShowTimeToTheater(showTime){
    this.movieShowTimeToTheater=showTime;
    this.movieShowTimeTheaterEmitter.emit(this.movieShowTimeToTheater);
  }
  setMovieList(movie):void{
    this.movieList=movie;
    this.movieListEmitter.emit(this.movieList);
  }
  setMovieDetail(movieDetail):void{
    this.movieDetail=movieDetail;
    this.movieDetailEmitter.emit(this.movieDetail);
  }
  constructor() { }
}
