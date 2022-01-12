import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAllClientsComponent } from './list-all-clients.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListAllClientsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[ListAllClientsComponent]
})
export class ListAllClientsModule { }
