import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef, ElementRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { nguoiDung } from "../../models/nguoiDung";
import { NguoidungService } from "../../Service/nguoidung.service";
import { NguoiDungGateWay } from '../../gateWays/nguoiDung';
import { Router } from '@angular/router';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {  
  credentials:any;
  statusbtn:boolean;
  statusLogin: boolean = true;
  hide: boolean = true;
  ndLogin: nguoiDung[] = [];
  @ViewChild('content') content:ElementRef;

  //Form Đăng ký  
  userNameDKFormControl=new FormControl("",[
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5),
    Validators.pattern("^[a-zA-Z0-9]*$"),
  ])
  passWordDKFormControl=new FormControl("",[
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5),
  ])
  fullNameDKFormControl=new FormControl("",[
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(40),
    Validators.pattern("^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
    "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
    "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$")
  ])
  emailDKFormControl=new FormControl("",[
    Validators.required,
    Validators.pattern("^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$"),
    Validators.maxLength(20),
   
  ])
  phoneDKFormControl=new FormControl("",[
    Validators.required,
    Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
  ])
  typeUserDKFormControl=new FormControl("",[
    Validators.required,
  ])
  typeTeamDKFormControl=new FormControl("",[
    Validators.required,
  ])
  formDangKy:FormGroup  =  new FormGroup({
    taiKhoan:this.userNameDKFormControl,
    matKhau:this.passWordDKFormControl,
    hoTen:this.fullNameDKFormControl,
    email:this.emailDKFormControl,
    soDt:this.phoneDKFormControl,
    maLoaiNguoiDung:this.typeUserDKFormControl,
    maNhom:this.typeTeamDKFormControl,
  })
  //Form Đăng nhập
  userNameFormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5)
  ]);
  passWordFormControl = new FormControl("", [
    Validators.required,
    Validators.maxLength(20),
    Validators.minLength(5)
  ]);
  formDangNhap:FormGroup = new FormGroup({
    taiKhoan:this.userNameFormControl,
    matKhau:this.passWordFormControl
  })
  constructor(
    private modalService: NgbModal,
    private root:Router,
    private _loginGateWay: NguoiDungGateWay,
    private _loginService: NguoidungService
  ) {}
  
  ngOnInit(): void {
    this.credentials=this._loginService.nguoiDungLogin;
    this._loginService.nguoiDungEmitter.subscribe((newUser)=>{
      this.credentials=newUser;
    })
    this.statusbtn=this._loginService.statusbtn;
    this._loginService.btnEmitter.subscribe((newBtn)=>{
      this.statusbtn=newBtn
    })
    
  }
  open(content) {
    this.modalService.open(content, { size: "lg" });
  }
  changeStatusLogin(event: MatTabChangeEvent) {
    if (event.index === 0) {
      this.statusLogin = true;
    } else {
      this.statusLogin = false;
    }
  }
  Login() {
    // console.log(this.formDangNhap.value)
    if(!this.formDangNhap.invalid){
      this._loginGateWay.dangNhap(this.formDangNhap.value).subscribe((result)=>{
        //Sau khi lấy về gửi lên local store
        localStorage.setItem("credentials",JSON.stringify(result));
        //Đưa lên services
        this._loginService.setNguoiDungLogin(result);
        console.log(this.credentials);
        alert("Đăng nhập thành công");
        //Sau khi đăng nhập thành công --> sẽ thoát modal
        this.modalService.dismissAll(this.content)
        //SAu khi đăng nhập thành công --> sẽ thành btnLogout
        this._loginService.statusButton(false);
        localStorage.setItem("statusBtn",JSON.stringify(this.statusbtn));
        //Sau khi đăng nhập thành công --> sẽ xóa cái trắng cái form
        this.formDangNhap.reset();
      },(err:any)=>{
        console.log(err.error);
        alert(err.error);
      })
    }
  }
  logOut(){   
    location.reload() 
    this._loginService.statusButton(true);
    localStorage.setItem("statusBtn",JSON.stringify(this.statusbtn));
    //Xóa dữ liệu trên localstorage
    localStorage.removeItem("credentials");
    this._loginService.setNguoiDungLogin(null);
    // console.log(this.credentials);
  }
  Sigup(){
    // console.log(this.formDangKy.value)
    if(!this.formDangKy.invalid){
      this._loginGateWay.dangKy(this.formDangKy.value).subscribe((result)=>{
        console.log(result);
        alert("Đăng ký thành công");
        this.formDangKy.reset();
      },(err)=>{
        console.log(err.error);
        alert(err.error);
      })
    }
  }
}
