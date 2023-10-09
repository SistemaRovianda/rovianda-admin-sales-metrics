import { Component, Input,Output, OnChanges, OnInit, SimpleChanges,EventEmitter } from '@angular/core';

import { PreSaleInterface, SaleInterface } from 'src/app/Models/SalePresaleModels';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-list-presales',
  templateUrl: './list-presales.component.html',
  styleUrls: ['./list-presales.component.scss']
})
export class ListPresalesComponent implements OnInit,OnChanges {

  constructor(private roviandaApiService: RoviandaApiService) { }
 
  ngOnChanges(changes: SimpleChanges): void {

  }
  
  @Input("_presales") listPreSales:PreSaleInterface[]=[];
  @Output("_preSaleDetails") preSaleDetails:EventEmitter<number>=new EventEmitter<number>();
  
  ngOnInit(): void {
  }

  showPreSaleDetails(preSaleId:number){
    this.preSaleDetails.emit(preSaleId);
  }

}
