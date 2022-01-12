import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersRankingComponent } from './sellers-ranking.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormatReportDialogModule } from '../format-report-dialog/format-report-dialog.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SellersRankingComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FormatReportDialogModule
  ],
  exports:[SellersRankingComponent]
})
export class SellersRankingModule { }
