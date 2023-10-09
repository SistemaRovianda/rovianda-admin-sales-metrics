import { Component, OnInit,Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.component.html',
  styleUrls: ['./ticketdetails.component.scss']
})
export class TicketdetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TicketdetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {ticket:string}) { }

    ticket:string="";
  ngOnInit(): void {
    this.ticket=this.data.ticket;
  }

  close(){
    this.dialogRef.close();
  }

}
