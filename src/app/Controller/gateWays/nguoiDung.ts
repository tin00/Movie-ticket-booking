import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dangNhap, nguoiDung } from '../models/nguoiDung';

@Injectable({
    providedIn:'root'
})
export class NguoiDungGateWay{
    constructor(private _http:HttpClient){}
    dangNhap(login:dangNhap):Observable<any>{
        let url="http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
        let header=new HttpHeaders();
        header.append('Content-Type','application/json;charset=UTF-8');
        let observ=this._http.post(url,login);
        return observ;
    }
    dangKy(signUp:nguoiDung):Observable<any>{
        let url="http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
        let header=new HttpHeaders();
        header.append('Content-Type','application/json;charset=UTF-8');
        let observ=this._http.post(url,signUp);
        return observ;
    }
}