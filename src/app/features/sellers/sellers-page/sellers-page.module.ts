import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersPageComponent } from './sellers-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { ListClientsSellerModule } from '../../home/components/list-clients-seller/list-clients-seller.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ListAllClientsModule } from '../../home/components/list-all-clients/list-all-clients.module';
import { FormatReportDialogModule } from '../../home/components/format-report-dialog/format-report-dialog.module';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ListClientsSellerComponent } from '../../home/components/list-clients-seller/list-clients-seller.component';
import { ListAllClientsComponent } from '../../home/components/list-all-clients/list-all-clients.component';
import { SellerRouteModule } from '../components/seller-route/seller-route.module';



@NgModule({
  declarations: [SellersPageComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDividerModule,
    ListClientsSellerModule,
    MatDialogModule,
    MatIconModule,
    ListAllClientsModule,
    FormatReportDialogModule,
    MatNativeDateModule,
    SellerRouteModule
  ],
  exports:[SellersPageComponent],
  providers:[{provide:MAT_DATE_LOCALE,useValue:"es-mx"}],
  entryComponents:[ListClientsSellerComponent,ListAllClientsComponent]
})
export class SellersPageModule { }
