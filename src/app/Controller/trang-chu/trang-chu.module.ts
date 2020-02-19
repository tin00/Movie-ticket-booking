import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { ShareModule } from '../share/share.module';
import { LayoutTrangChuComponent } from './layout-trang-chu/layout-trang-chu.component';
import { SliderComponent } from './slider/slider.component';



@NgModule({
  declarations: [LoaiPhimComponent, LayoutTrangChuComponent, SliderComponent],
  imports: [
    CommonModule,ShareModule
  ],
  exports:[LoaiPhimComponent,LayoutTrangChuComponent]
})
export class TrangChuModule { }
