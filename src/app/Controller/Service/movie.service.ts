import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList=[];
  movieDetail;
  //Output Movie List
  @Output() movieListEmitter =new EventEmitter();
  //Output movie Detail
  @Output() movieDetailEmitter= new EventEmitter();
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
