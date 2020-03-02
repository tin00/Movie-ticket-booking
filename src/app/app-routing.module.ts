import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutTrangChuComponent } from './Controller/trang-chu/layout-trang-chu/layout-trang-chu.component';
import { LayoutChiTietPhimComponent } from './Controller/trang-chi-tiet-phim/layout-chi-tiet-phim/layout-chi-tiet-phim.component';


const routes: Routes = [
  {path:'',component:LayoutTrangChuComponent},
  {path:'chitietphim/:maPhim',component:LayoutChiTietPhimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
