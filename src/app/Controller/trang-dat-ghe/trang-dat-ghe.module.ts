import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatghePageComponent } from './datghe-page/datghe-page.component';
import { ShareModule } from '../share/share.module';
import { GheComponent } from './ghe/ghe.component';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { CountdownModule } from 'ngx-countdown';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [DatghePageComponent, GheComponent, DanhsachgheComponent],
  imports: [
    CommonModule,ShareModule,MatInputModule,MatButtonModule,CountdownModule
  ],exports:[DatghePageComponent]
})
export class TrangDatGheModule { }
