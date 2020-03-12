import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class PhimGateWay{
  
    constructor(private _http:HttpClient) { }
    FechDanhSachPhim():Observable<any>{
      let url="http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP08";
      let observ=this._http.get(url);
      return observ;
    }
    LayChiTietPhim(maPhim):Observable<any>{
      let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
      let observ=this._http.get(url);
      return observ;
    }
    LayLichChieuTheoHeThongRap(maHeThongRap):Observable<any>{
      let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP08`
      let observ=this._http.get(url);
      return observ;
    }
  }