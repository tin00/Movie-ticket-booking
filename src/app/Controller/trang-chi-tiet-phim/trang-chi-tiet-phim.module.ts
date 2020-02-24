import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutChiTietPhimComponent } from "./layout-chi-tiet-phim/layout-chi-tiet-phim.component";
import { ShareModule } from "../share/share.module";
import { DetailMainComponent } from "./detail-main/detail-main.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [LayoutChiTietPhimComponent, DetailMainComponent],
  imports: [CommonModule, ShareModule, MatButtonModule],
  exports: [LayoutChiTietPhimComponent]
})
export class TrangChiTietPhimModule {}
