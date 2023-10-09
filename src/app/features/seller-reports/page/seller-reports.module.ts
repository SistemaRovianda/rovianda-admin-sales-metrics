import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerReportsComponent } from './seller-reports.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ListAllClientsModule } from '../../home/components/list-all-clients/list-all-clients.module';

@NgModule({
  declarations: [SellerReportsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    ListAllClientsModule
  ],
  exports:[SellerReportsComponent],
  providers:[MatDatepickerModule,MatNativeDateModule,{provide: MAT_DATE_LOCALE,useValue:"es-mx"}]
})
export class SellerReportsModule { }
