import { Component, Input,Output, OnChanges, OnInit, SimpleChanges,EventEmitter} from '@angular/core';

import { SaleInterface } from 'src/app/Models/SalePresaleModels';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';


@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.scss']
})
export class ListSalesComponent implements OnInit, OnChanges {

  constructor(private roviandaApiService: RoviandaApiService) { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  @Output("_saleDetails") saleDetails:EventEmitter<number>=new EventEmitter<number>();

  @Input("_sales")  listSales:SaleInterface[]=[];
  ngOnInit(): void {
  }

  showSaleDetails(saleId:number){
    this.saleDetails.emit(saleId);
  }

}
