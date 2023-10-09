import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPresalesComponent } from './list-presales.component';



@NgModule({
  declarations: [ListPresalesComponent],
  imports: [
    CommonModule
  ],
  exports: [ListPresalesComponent]
})
export class ListPresalesModule { }
