import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rap-phim',
  templateUrl: './rap-phim.component.html',
  styleUrls: ['./rap-phim.component.scss']
})
export class RapPhimComponent implements OnInit {
  statusChonRap=true;
  constructor() { }

  ngOnInit(): void {
  }
  bhd1Select(){
    this.statusChonRap=true;
  }
  bhd2Select(){
    this.statusChonRap=false;
  }
}
