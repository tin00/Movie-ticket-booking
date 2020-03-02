import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoaiPhimComponent } from "./loai-phim/loai-phim.component";
import { ShareModule } from "../share/share.module";
import { LayoutTrangChuComponent } from "./layout-trang-chu/layout-trang-chu.component";
import { SliderComponent } from "./slider/slider.component";
import { SearchMovieToolComponent } from "./search-movie-tool/search-movie-tool.component";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";

import { PhimSapChieuComponent } from "./phim-sap-chieu/phim-sap-chieu.component";
import { PhimDangChieuComponent } from "./phim-dang-chieu/phim-dang-chieu.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
import { RapPhimComponent } from "./rap-phim/rap-phim.component";
import { MatTabsModule } from "@angular/material/tabs";
import { NewComponent } from "./new/new.component";
import { DienAnhComponent } from "./dien-anh/dien-anh.component";
import { ReViewComponent } from "./re-view/re-view.component";
import { KhuyenMaiComponent } from "./khuyen-mai/khuyen-mai.component";
import { ItemNewComponent } from "./item-new/item-new.component";
import { MoblieAppComponent } from './moblie-app/moblie-app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Router} from "@angular/router"
@NgModule({
  declarations: [
    LoaiPhimComponent,
    LayoutTrangChuComponent,
    SliderComponent,
    SearchMovieToolComponent,
    PhimSapChieuComponent,
    PhimDangChieuComponent,
    ItemPhimComponent,
    RapPhimComponent,
    NewComponent,
    DienAnhComponent,
    ReViewComponent,
    KhuyenMaiComponent,
    ItemNewComponent,
    MoblieAppComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    NgbModule,
    RouterModule
  ],
  exports: [LayoutTrangChuComponent,RapPhimComponent]
})
export class TrangChuModule {}
