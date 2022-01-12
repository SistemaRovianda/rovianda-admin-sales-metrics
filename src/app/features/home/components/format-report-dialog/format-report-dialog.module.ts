import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatReportDialogComponent } from './format-report-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [FormatReportDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  exports:[FormatReportDialogComponent]
})
export class FormatReportDialogModule { }
