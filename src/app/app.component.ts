import { Component, OnInit } from '@angular/core';
import { NguoidungService } from './Controller/Service/nguoidung.service';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _userService:NguoidungService){}
  ngOnInit(){
    const credentialsString=localStorage.getItem('credentials');
    const statusBtn=localStorage.getItem('statusBtn');
    if(credentialsString){
      this._userService.setNguoiDungLogin(JSON.parse(credentialsString))
    }
    if(statusBtn){
      this._userService.statusButton(JSON.parse(statusBtn))
    }
  }
  title = 'DA-Dat-Ve-Xem-Phim';
}
