import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { registerLocaleData } from '@angular/common'
import localeFr from '@angular/common/locales/fr';
import { ActivatedRoute } from '@angular/router';
import { RapphimService } from '../../Service/rapphim.service';
import { rapPhimGateWay } from '../../gateWays/rapPhim';
registerLocaleData(localeFr, 'fr-VND')
@Component({
  selector: 'app-danhsachghe',
  templateUrl: './danhsachghe.component.html',
  styleUrls: ['./danhsachghe.component.scss']
})
export class DanhsachgheComponent implements OnInit {
  listPhongVe=[];
  listGheNgoi:[]
  styleRight: string;
  maLC:string
  styleRightSelect: boolean = true;
  backgroundBooking: boolean
  costTicket: number = 0;
  costCombo: number = 0;
  costSeat: number = 0;
  payNumber: number = 0;
  emailDatVe;
  phoneDatVe;

  listFood = [
    { nameFood: "MR 2020", Gia: 79000, hinhAnhFood: "../../../../assets/img/my_combo_mr_2020.jpg", soLuongFood: 0 },
    { nameFood: "HB 2020", Gia: 120000, hinhAnhFood: "../../../../assets/img/Ham.png", soLuongFood: 0 },
    { nameFood: "RC 2020", Gia: 150000, hinhAnhFood: "../../../../assets/img/m5.png", soLuongFood: 0 }
  ];
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
  constructor(private _maLichChieu:ActivatedRoute,
              private _phongVeGateWay:rapPhimGateWay,
              private _phongVeService:RapphimService) { }

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
  payBookingFormControl = new FormControl("", [
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
    if (test) {
      this.emailDatVe = test.email
      this.phoneDatVe = test.soDT
    }
    this._maLichChieu.params.subscribe(result=>{
      this.maLC=result.maLichChieu;
      console.log(this.maLC);
      this.getPhongVe(this.maLC)
    })
  }
  getPhongVe(maLichChieu){
    this.listPhongVe=this._phongVeService.listPhongVe;
    this._phongVeService.phongVeEmitter.subscribe((newPhongVe)=>{
      this.listPhongVe=newPhongVe
    })
    this._phongVeGateWay.getDanhSachPhongVe(maLichChieu).subscribe((data)=>{
      this._phongVeService.setPhongVe(data.thongTinPhim);
      this.listGheNgoi=data.danhSachGhe;
      console.log(this.listPhongVe)
      console.log(this.listGheNgoi)
    },(err)=>{
      console.log(err.error)
    })
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
      this.costSeat += ghe.Gia
      this.payNumber++
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.danhSachGheDangDat) {
        if (this.danhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.costTicket -= this.danhSachGheDangDat[index].Gia;
          this.costSeat -= this.danhSachGheDangDat[index].Gia;
          this.danhSachGheDangDat.splice(parseInt(index), 1);
          this.payNumber--;
        }
      }
    }
  }
  ticketBooking() {
    if (!this.formTicketBooking.invalid) {
      alert("Đặt vé thành công")
    }
  }
  showListCombo() {
    if (this.styleRightSelect) {
      this.backgroundBooking = true;
      this.styleRight = "right:440px;"
      this.styleRightSelect = false;
    } else {
      this.backgroundBooking = false;
      this.styleRight = "right:-25px"
      this.styleRightSelect = true;
    }
  }
  tangSoLuong(name) {
    for (let index in this.listFood) {
      if (this.listFood[index].soLuongFood < 10) {
        if (name === this.listFood[index].nameFood) {
          this.costTicket += this.listFood[index].Gia
          this.costCombo += this.listFood[index].Gia
          this.listFood[index].soLuongFood++;
        }
      }
    }
  }
  giamSoLuong(name) {
    for (let index in this.listFood) {
      if (this.listFood[index].soLuongFood > 0) {
        if (name === this.listFood[index].nameFood) {
          this.costTicket -= this.listFood[index].Gia
          this.costCombo -= this.listFood[index].Gia
          this.listFood[index].soLuongFood--;
        }
      }
    }
  }
}
