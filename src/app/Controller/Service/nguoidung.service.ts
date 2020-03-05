import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {
  nguoiDungLogin;
  //Output nguoi Dung Login
  @Output() nguoiDungEmitter = new EventEmitter();
  setNguoiDungLogin(login):void{
    this.nguoiDungLogin=login;
    this.nguoiDungEmitter.emit(this.nguoiDungLogin);
  }
  constructor() { }
}
