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
  hoTen=[];
  constructor() {
    
  }

  ngOnInit(): void {
    const rate=JSON.parse(localStorage.getItem("rateRevie"));
    if(rate){
      for(let i=0;i<rate.length;i++){
        this.listRateRevie.push(rate[i])
      }
    }
    const login=JSON.parse(localStorage.getItem('Name'));
    if(login){
      for(let i=0;i<login.length;i++){
        this.hoTen.push(login[i]);
      }
      console.log(login)
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
      this.hoTen.push(login.hoTen);
      this.listComment.push(this.comment);
      localStorage.setItem("comments",JSON.stringify(this.listComment))
      localStorage.setItem("Name",JSON.stringify(this.hoTen))
      this.comment = "";
      this.listRateRevie.push(this.currentRate);
      localStorage.setItem("rateRevie",JSON.stringify(this.listRateRevie));
    }else{
      alert("Vui lòng đăng nhập");
    }
  }
  
}
