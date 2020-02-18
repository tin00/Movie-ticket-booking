import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';



@NgModule({
  declarations: [LoaiPhimComponent],
  imports: [
    CommonModule
  ],
  exports:[LoaiPhimComponent]
})
export class TrangChuModule { }
