import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuModule } from './Controller/trang-chu/trang-chu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrangChiTietPhimModule } from './Controller/trang-chi-tiet-phim/trang-chi-tiet-phim.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    TrangChiTietPhimModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
