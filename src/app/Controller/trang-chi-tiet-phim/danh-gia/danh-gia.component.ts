import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-danh-gia",
  templateUrl: "./danh-gia.component.html",
  styleUrls: ["./danh-gia.component.scss"]
})
export class DanhGiaComponent implements OnInit {
  currentRate = 3.0;
  comment = "";
  imgStar = "../../../../assets/img/star1.png";
  listComment = [];
  listRateRevie = [];
  listImg = [];
  hoTen:string;
  constructor() {
    
  }

  ngOnInit(): void {
    const login=JSON.parse(localStorage.getItem('credentials'));
    if(login){
      this.hoTen=login.hoTen;
    } 
    const newComment=JSON.parse(localStorage.getItem("comments"))
    console.log(newComment);
    if(newComment){
      for(let i=0;i<newComment.length;i++){
        this.listComment.push(newComment[i]);
      }
    }
  }
  addComment() {  
    const login=JSON.parse(localStorage.getItem('credentials'));
    if(login){
      this.hoTen=login.hoTen;
    }  
    if(login){
      this.listComment.push(this.comment);
      localStorage.setItem("comments",JSON.stringify(this.listComment))
      this.comment = "";
      this.listRateRevie.push(this.currentRate);
    }else{
      alert("Vui lòng đăng nhập");
    }
  }
  
}
