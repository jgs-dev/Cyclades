import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassicPage } from './classic.page';

const routes: Routes = [
  {
    path: '',
    component: ClassicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassicPageRoutingModule {}
