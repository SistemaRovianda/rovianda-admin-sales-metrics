import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeClientSellerComponent } from './change-client-seller.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmChangeModule } from '../confirm-change/confirm-change.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [ChangeClientSellerComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ConfirmChangeModule,
    MatProgressSpinnerModule
  ],
  exports:[ChangeClientSellerComponent]
})
export class ChangeClientSellerModule { }
