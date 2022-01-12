import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartSalesComponent } from './chart-sales.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [ChartSalesComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [ChartSalesComponent]
})
export class ChartSalesModule { }
