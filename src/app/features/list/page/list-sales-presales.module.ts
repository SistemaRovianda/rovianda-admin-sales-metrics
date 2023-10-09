import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSalesPresalesComponent } from './list-sales-presales.component';
import { ListPresalesModule } from '../components/list-presales/list-presales.module';
import { ListSalesModule } from '../components/list-sales/list-sales.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { TicketdetailsModule } from '../components/ticketdetails/ticketdetails.module';

@NgModule({
  declarations: [ListSalesPresalesComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ListPresalesModule,
    ListSalesModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    TicketdetailsModule
  ],
  exports:[ListSalesPresalesComponent],
  providers:[MatDatepickerModule,MatNativeDateModule,{provide: MAT_DATE_LOCALE,useValue:"es-mx"}]
})
export class ListSalesPresalesModule { }
