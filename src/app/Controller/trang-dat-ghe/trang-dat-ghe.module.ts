import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatghePageComponent } from './datghe-page/datghe-page.component';
import { ShareModule } from '../share/share.module';
import { GheComponent } from './ghe/ghe.component';
import { DanhsachgheComponent } from './danhsachghe/danhsachghe.component';
import { CountdownModule } from 'ngx-countdown';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [DatghePageComponent, GheComponent, DanhsachgheComponent],
  imports: [
    CommonModule, ShareModule, MatInputModule, MatButtonModule,
     CountdownModule, MatFormFieldModule, FormsModule,ReactiveFormsModule,
     MatRadioModule
  ], exports: [DatghePageComponent]
})
export class TrangDatGheModule { }
