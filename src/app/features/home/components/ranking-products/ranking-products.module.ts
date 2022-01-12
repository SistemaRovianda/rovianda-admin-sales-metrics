import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingProductsComponent } from './ranking-products.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormatReportDialogModule } from '../format-report-dialog/format-report-dialog.module';
@NgModule({
  declarations: [RankingProductsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormatReportDialogModule
  ],
  exports:[RankingProductsComponent]
})
export class RankingProductsModule { }
