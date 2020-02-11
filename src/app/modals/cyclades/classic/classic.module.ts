import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassicPageRoutingModule } from './classic-routing.module';

import { ClassicPage } from './classic.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassicPageRoutingModule
  ],
  declarations: [
    ClassicPage
  ]
})
export class ClassicPageModule { }
