import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NguoidungService {
  nguoiDungLogin;
  statusbtn:boolean=true;
  //Output nguoi Dung Login
  @Output() nguoiDungEmitter = new EventEmitter();
  //Output button 
  @Output() btnEmitter=new EventEmitter();
  setNguoiDungLogin(login):void{
    this.nguoiDungLogin=login;
    this.nguoiDungEmitter.emit(this.nguoiDungLogin);
  }
  statusButton(status:boolean){
    this.statusbtn=status;
    this.btnEmitter.emit(this.statusbtn);
  }
  constructor() { }
}
