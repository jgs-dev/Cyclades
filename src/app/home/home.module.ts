import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ClassicPage} from '../modals/cyclades/classic/classic.page';
import { ClassicPageModule } from '../modals/cyclades/classic/classic.module';
import { TitansPage } from '../modals/cyclades/titans/titans.page';
import { TitansPageModule } from '../modals/cyclades/titans/titans.module';


@NgModule({
  entryComponents:[
    ClassicPage,
    TitansPage
    
  ],
  imports: [
    ClassicPageModule,
    TitansPageModule,
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
