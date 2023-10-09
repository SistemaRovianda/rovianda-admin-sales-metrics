import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableSalesModule } from '../components/table-sales/table-sales.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalListSalesTakedModule } from '../components/modal-list-sales-taked/modal-list-sales-taked.module';
import { ModalListSalesTakedComponent } from '../components/modal-list-sales-taked/modal-list-sales-taked.component';
import { ModalConfirmRemoveModule } from '../components/modal-confirm-remove/modal-confirm-remove.module';
import { ModalConfirmRemoveComponent } from '../components/modal-confirm-remove/modal-confirm-remove.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ChartSalesModule } from '../components/chart-sales/chart-sales.module';
import { RankingProductsModule } from '../components/ranking-products/ranking-products.module';
import { RankingProductsComponent } from '../components/ranking-products/ranking-products.component';
import { SellersRankingModule } from '../components/sellers-ranking/sellers-ranking.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,TableSalesModule,MatCardModule,MatButtonModule,MatIconModule,ModalListSalesTakedModule,ModalConfirmRemoveModule,MatProgressSpinnerModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ChartSalesModule,
    RankingProductsModule,
    SellersRankingModule
  ],exports:[HomeComponent],
  providers:[MatDatepickerModule,MatNativeDateModule,{provide: MAT_DATE_LOCALE,useValue:"es-mx"}]
})
export class HomeModule { }
