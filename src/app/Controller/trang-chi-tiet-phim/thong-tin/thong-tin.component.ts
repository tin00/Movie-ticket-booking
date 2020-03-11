import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thong-tin',
  templateUrl: './thong-tin.component.html',
  styleUrls: ['./thong-tin.component.scss']
})
export class ThongTinComponent implements OnInit {
@Input() inForMovie;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inForMovie);
  }

}
