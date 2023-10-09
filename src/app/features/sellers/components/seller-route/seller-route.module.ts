import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRouteComponent } from './seller-route.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [SellerRouteComponent],
  imports: [
    CommonModule,MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports:[SellerRouteComponent]
})
export class SellerRouteModule { }
