import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
    providedIn:'root'
})
export class rapPhimGateWay{
    constructor(private _http:HttpClient){}
    FechRapPhim():Observable<any>{
        let url="http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
        let observ=this._http.get(url);
        return observ;
    }
    getCumRapTheoHeThong(maHeThongRap):Observable<any>{
        let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
        let observ=this._http.get(url);
        return observ;
    }
    getLichChieuTheoPhim(maPhim):Observable<any>{
        let url=`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
        let observ=this._http.get(url);
        return observ;
    }
}