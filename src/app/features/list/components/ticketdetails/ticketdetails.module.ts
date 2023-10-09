import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketdetailsComponent } from './ticketdetails.component';



@NgModule({
  declarations: [TicketdetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [TicketdetailsComponent]
})
export class TicketdetailsModule { }
