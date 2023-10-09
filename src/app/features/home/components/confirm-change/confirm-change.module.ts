import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmChangeComponent } from './confirm-change.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ConfirmChangeComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[ConfirmChangeComponent]
})
export class ConfirmChangeModule { }
