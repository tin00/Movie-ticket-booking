import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
  status:boolean=false;
  @Output() emitStatus= new EventEmitter()
  @Input() ghe;
  constructor() { }

  ngOnInit(): void {
  }
  datGhe(){
    if(this.status){
      this.status=false;
    }else{
      this.status=true;
    }
    this.emitStatus.emit(this.status);
  }
}
