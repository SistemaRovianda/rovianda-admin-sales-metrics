import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerSectionComponent } from './seller-section.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import { ListClientsSellerModule } from '../list-clients-seller/list-clients-seller.module';
import { ListClientsSellerComponent } from '../list-clients-seller/list-clients-seller.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ListAllClientsModule } from '../list-all-clients/list-all-clients.module';
import { ListAllClientsComponent } from '../list-all-clients/list-all-clients.component';
import { FormatReportDialogModule } from '../format-report-dialog/format-report-dialog.module';
@NgModule({
  declarations: [SellerSectionComponent],
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
    FormatReportDialogModule
  ],
  exports:[SellerSectionComponent],
  providers:[{provide:MAT_DATE_LOCALE,useValue:"es-mx"}],
  entryComponents:[ListClientsSellerComponent,ListAllClientsComponent]
})
export class SellerSectionModule { }
