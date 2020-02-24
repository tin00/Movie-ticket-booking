import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})
export class ItemNewComponent implements OnInit {
  @Input() itemNew;
  constructor() { }

  ngOnInit(): void {
  }

}
