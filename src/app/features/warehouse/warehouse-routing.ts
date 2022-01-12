import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageModule } from './page/page.module';

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), PageModule
  ],
  exports: [PageModule]
})
export class WarehouseRouting { }
