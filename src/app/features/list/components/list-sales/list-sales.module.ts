import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSalesComponent } from './list-sales.component';



@NgModule({
  declarations: [ListSalesComponent],
  imports: [
    CommonModule
  ],
  exports: [ListSalesComponent]
})
export class ListSalesModule { }
