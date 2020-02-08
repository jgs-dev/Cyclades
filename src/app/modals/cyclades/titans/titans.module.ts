import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitansPageRoutingModule } from './titans-routing.module';

import { TitansPage } from './titans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitansPageRoutingModule
  ],
  declarations: [TitansPage]
})
export class TitansPageModule {}
