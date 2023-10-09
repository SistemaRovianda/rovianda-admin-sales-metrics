import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-change',
  templateUrl: './confirm-change.component.html',
  styleUrls: ['./confirm-change.component.scss']
})
export class ConfirmChangeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{msg:string},private matDialogRef:MatDialogRef<ConfirmChangeComponent>) { }
  message:string="";
  ngOnInit(): void {
    this.message=this.data.msg;
  }

  confirm(){
    this.matDialogRef.close(true);
  }
  cancel(){
    this.matDialogRef.close(false);
  }

}
