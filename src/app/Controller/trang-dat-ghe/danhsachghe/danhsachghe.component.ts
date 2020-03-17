import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.scss']
})
export class DanhsachgheComponent implements OnInit {
  costTicket: number = 0;
  payNumber:number=0;
  emailDatVe;
  phoneDatVe;
  listSeat = [{ SoGhe: 1, TenGhe: "số 1", Gia: 100, TrangThai: false },
  { SoGhe: 2, TenGhe: "số 2", Gia: 100, TrangThai: false },
  { SoGhe: 3, TenGhe: "số 3", Gia: 100, TrangThai: false },
  { SoGhe: 4, TenGhe: "số 4", Gia: 100, TrangThai: false },
  { SoGhe: 5, TenGhe: "số 5", Gia: 100, TrangThai: false },
  { SoGhe: 6, TenGhe: "số 6", Gia: 100, TrangThai: false },
  { SoGhe: 7, TenGhe: "số 7", Gia: 100, TrangThai: false },
  { SoGhe: 8, TenGhe: "số 7", Gia: 100, TrangThai: false },
  { SoGhe: 9, TenGhe: "số 9", Gia: 100, TrangThai: false },
  { SoGhe: 10, TenGhe: "số 10", Gia: 100, TrangThai: false },
  { SoGhe: 11, TenGhe: "số 11", Gia: 100, TrangThai: false },
  { SoGhe: 12, TenGhe: "số 12", Gia: 100, TrangThai: false },
  { SoGhe: 13, TenGhe: "số 13", Gia: 100, TrangThai: false },
  { SoGhe: 14, TenGhe: "số 14", Gia: 100, TrangThai: false },
  { SoGhe: 15, TenGhe: "số 15", Gia: 100, TrangThai: false },
  { SoGhe: 16, TenGhe: "số 16", Gia: 100, TrangThai: false },
  { SoGhe: 17, TenGhe: "số 17", Gia: 100, TrangThai: false },
  { SoGhe: 18, TenGhe: "số 18", Gia: 100, TrangThai: false },
  { SoGhe: 19, TenGhe: "số 19", Gia: 100, TrangThai: false },
  { SoGhe: 20, TenGhe: "số 20", Gia: 100, TrangThai: false },
  { SoGhe: 21, TenGhe: "số 21", Gia: 100, TrangThai: false },
  { SoGhe: 22, TenGhe: "số 22", Gia: 100, TrangThai: false },
  { SoGhe: 23, TenGhe: "số 23", Gia: 100, TrangThai: false },
  { SoGhe: 24, TenGhe: "số 24", Gia: 100, TrangThai: false },
  { SoGhe: 25, TenGhe: "số 25", Gia: 100, TrangThai: false },
  { SoGhe: 26, TenGhe: "số 26", Gia: 100, TrangThai: false },
  { SoGhe: 27, TenGhe: "số 27", Gia: 100, TrangThai: false },
  { SoGhe: 28, TenGhe: "số 28", Gia: 100, TrangThai: false },
  { SoGhe: 29, TenGhe: "số 29", Gia: 100, TrangThai: false },
  { SoGhe: 30, TenGhe: "số 30", Gia: 100, TrangThai: true },
  { SoGhe: 31, TenGhe: "số 31", Gia: 100, TrangThai: false },
  { SoGhe: 32, TenGhe: "số 32", Gia: 100, TrangThai: false },
  { SoGhe: 33, TenGhe: "số 33", Gia: 100, TrangThai: false },
  { SoGhe: 34, TenGhe: "số 34", Gia: 100, TrangThai: false },
  { SoGhe: 35, TenGhe: "số 35", Gia: 100, TrangThai: false },]
  soGheConLai = 0;
  soGheDaDat = 0;
  danhSachGheDangDat = []
  constructor() { }

  emailBookingFormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5),
    Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"),
  ])
  phoneBookingFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
  ])
  payBookingFormControl=new FormControl("",[
    Validators.required
  ])
  formTicketBooking: FormGroup = new FormGroup({
    emailDV: this.emailBookingFormControl,
    phoneDV: this.phoneBookingFormControl,
    payDV: this.payBookingFormControl
  })
  ngOnInit(): void {
    const test = JSON.parse(localStorage.getItem("credentials"));
    for (let item of this.listSeat) {
      if (!item.TrangThai) {
        this.soGheConLai++;
      }
    }
    if(test){
      this.emailDatVe = test.email
      this.phoneDatVe = test.soDT
    }
  }
  handleEvent(event) {
    console.log(event)
    if (event.left === 0) {
      alert("Đã hết thời gian giữ ghế. Vui lòng thực hiện lại trong thời gian 5 phút.")
      location.reload()
    }
  }
  datGheParent(value, ghe) {
    if (value) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.danhSachGheDangDat.push(ghe)
      this.costTicket += ghe.Gia
      this.payNumber++
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.danhSachGheDangDat) {
        if (this.danhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.costTicket -= this.danhSachGheDangDat[index].Gia;
          this.danhSachGheDangDat.splice(parseInt(index), 1);
          this.payNumber--;
        }
      }
    }   
  }
  ticketBooking(){
    if(!this.formTicketBooking.invalid){
      alert("Không lỗi")
    }
  }
}
