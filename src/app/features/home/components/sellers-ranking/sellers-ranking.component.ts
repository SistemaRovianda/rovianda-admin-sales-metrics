import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RankingSeller } from 'src/app/Models/Sale.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { FormatReportDialogComponent } from '../format-report-dialog/format-report-dialog.component';

@Component({
  selector: 'app-sellers-ranking',
  templateUrl: './sellers-ranking.component.html',
  styleUrls: ['./sellers-ranking.component.scss']
})
export class SellersRankingComponent implements OnInit {

  isLoading:Boolean=false;
  constructor(@Inject(MAT_DIALOG_DATA) public data:{dateStart:string,dateEnd:string},private roviandaApi:RoviandaApiService,
  public matDialogRef:MatDialogRef<SellersRankingComponent>,
  private dialog:MatDialog) { }
  rankingSellers:RankingSeller[]=[];
  selection:RankingSeller;
  ngOnInit(): void {
    this.isLoading=true;
    this.roviandaApi.getRankingOfSellersByDate(this.data.dateStart,this.data.dateEnd).subscribe((rankingSellers)=>{
      this.rankingSellers = rankingSellers.map(x=>({...x,selected:false}));
      this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    })
  }

  select(index:number){
    if(this.rankingSellers[index].selected){
      this.selection=null;
      this.rankingSellers[index].selected=false;
    }else{
      this.selection= this.rankingSellers[index];
      this.rankingSellers.forEach(x=>x.selected=false);
      this.rankingSellers[index].selected=true;
    } 
  }
  closeModal(){
    this.matDialogRef.close();
  }

  parseAmount(number:number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  showModalDownload(){
    this.dialog.open(FormatReportDialogComponent,{
      data:{
        dateStart:this.data.dateStart,
        dateEnd: this.data.dateEnd,
        type: (this.selection)?3:2,
        presentationId: null,
        sellerName: this.selection?.name,
        sellerId: this.selection?.sellerId
      },
      disableClose:true
    });
}
}
