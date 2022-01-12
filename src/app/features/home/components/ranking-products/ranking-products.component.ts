import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChartD3DataInterface, RankingSellerByProduct } from 'src/app/Models/Metrics';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { FormatReportDialogComponent } from '../format-report-dialog/format-report-dialog.component';

@Component({
  selector: 'app-ranking-products',
  templateUrl: './ranking-products.component.html',
  styleUrls: ['./ranking-products.component.scss']
})
export class RankingProductsComponent implements OnInit {

  dateStart:string="";
  dateEnd:string="";
  selection:ChartD3DataInterface;
  rankingSellersByProduct:RankingSellerByProduct[]=[];
  totalWeight:string="0";
  totalBill:string="0";
  uniMed:string="";
  constructor(@Inject(MAT_DIALOG_DATA) public data:{products:ChartD3DataInterface[],dateStart:string,dateEnd:string},
  private roviandaApi:RoviandaApiService,
  public dialogRef:MatDialogRef<RankingProductsComponent>,
  private dialog:MatDialog) { }
  isLoading:boolean=false;
  ngOnInit(): void {
    this.dateStart = this.data.dateStart;
    this.dateEnd = this.data.dateEnd;
    console.log(JSON.stringify(this.data.products));
    
  }

  parseAmount(number:number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
  closeModal(){
    this.dialogRef.close();
  }

  select(index:number){
    if(!this.isLoading){
      this.isLoading=true;
      this.selection = this.data.products[index];
      this.roviandaApi.getRankingSellersByProduct(this.selection.presentationId,this.dateStart,this.dateEnd).subscribe((ranking)=>{
        this.rankingSellersByProduct = ranking.sort((a,b)=>b.amount-a.amount);
        this.totalWeight =this.parseAmount(ranking.map(x=>x.quantity).reduce((a,b)=>a+b,0));
        this.totalBill =this.parseAmount(ranking.map(x=>x.amount).reduce((a,b)=>a+b,0));
        this.uniMed = this.selection.uniMed;
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
      })
  }
  }

  back(){
    if(!this.isLoading){
      this.selection=null;
      this.rankingSellersByProduct=[];
      this.totalBill="0";
      this.totalWeight="0";
      this.uniMed="";
    }
  }

  showModalDownload(){
      this.dialog.open(FormatReportDialogComponent,{
        data:{
          dateStart:this.dateStart,
          dateEnd: this.dateEnd,
          type: (this.selection)?1:0,
          presentationId: (this.selection)?this.selection.presentationId:0
        },
        disableClose:true
      });
  }

}
