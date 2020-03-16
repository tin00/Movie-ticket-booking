import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { LayoutChiTietPhimComponent } from "./layout-chi-tiet-phim/layout-chi-tiet-phim.component";
import { ShareModule } from "../share/share.module";
import { DetailMainComponent } from "./detail-main/detail-main.component";
import { MatButtonModule } from "@angular/material/button";
import { TrangChuModule } from "../trang-chu/trang-chu.module";
import { LichChieuComponent } from "./lich-chieu/lich-chieu.component";
import { ThongTinComponent } from "./thong-tin/thong-tin.component";
import { DanhGiaComponent } from "./danh-gia/danh-gia.component";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Router } from "@angular/router"
@NgModule({
  declarations: [
    LayoutChiTietPhimComponent,
    DetailMainComponent,
    LichChieuComponent,
    ThongTinComponent,
    DanhGiaComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatButtonModule,
    TrangChuModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    FormsModule,
    MatTabsModule, 
    RouterModule
  ],
  exports: [LayoutChiTietPhimComponent]
})
export class TrangChiTietPhimModule { }
