import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClientsSellerComponent } from './list-clients-seller.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { ClientDetailsModule } from '../client-details/client-details.module';
import { ClientDetailsComponent } from '../client-details/client-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [ListClientsSellerComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    ClientDetailsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  entryComponents:[ClientDetailsComponent]
})
export class ListClientsSellerModule { }
