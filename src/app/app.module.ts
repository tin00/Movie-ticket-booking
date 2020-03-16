import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuModule } from './Controller/trang-chu/trang-chu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrangChiTietPhimModule } from './Controller/trang-chi-tiet-phim/trang-chi-tiet-phim.module';
import { RouterModule } from '@angular/router';
import { TrangDatGheModule } from './Controller/trang-dat-ghe/trang-dat-ghe.module';




@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    TrangChiTietPhimModule,
    TrangDatGheModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

