import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-format-report-dialog',
  templateUrl: './format-report-dialog.component.html',
  styleUrls: ['./format-report-dialog.component.scss']
})
export class FormatReportDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{dateStart:string,dateEnd:string,type:number,presentationId:number,sellerId:string,sellerName:string},
  private roviandaApi:RoviandaApiService,
  private matDialogRef:MatDialogRef<FormatReportDialogComponent>) { }
  isLoading:Boolean=false;
  ngOnInit(): void {
  }

  downLoadPdf(){
    if(!this.isLoading){
    this.isLoading=true;
    if(this.data.type==0){
      this.roviandaApi.getReportRankingOfProducts(this.data.dateStart,this.data.dateEnd,"pdf").subscribe((blob)=>{
            this.downloadFile(blob,"pdf","RankingDeProductos");
            this.isLoading=false;
      },err=>{
        this.isLoading=false;
      });
    }else if(this.data.type==1){
      this.roviandaApi.getReportRankingOfProductsByProduct(this.data.presentationId,this.data.dateStart,this.data.dateEnd,"pdf").subscribe((blob)=>{
        this.downloadFile(blob,"pdf","RankingDeVendedoresPorProducto");
        this.isLoading=false;
  },err=>{
    this.isLoading=false;
  });
    }else if(this.data.type==2){
      this.roviandaApi.getReportRankingOfSellers(this.data.dateStart,this.data.dateEnd,"pdf").subscribe((blob)=>{
        this.downloadFile(blob,"pdf","RankingDeVendedoresGeneral");
        this.isLoading=false;
  },err=>{
    this.isLoading=false;
  });
    }else if(this.data.type==3){
      this.roviandaApi.downloadSummary(this.data.sellerId,this.data.dateStart,this.data.dateEnd,"pdf").subscribe((blob)=>{
        this.downloadFile(blob,"pdf","ReporteIndividual"+this.data.sellerName.trim().split(".").join(""));
        this.isLoading=false;
  },err=>{
    this.isLoading=false;
  });
    }
    }
  }


  downLoadExcel(){
    if(!this.isLoading){
    this.isLoading=true;
    if(this.data.type==0){
    this.roviandaApi.getReportRankingOfProducts(this.data.dateStart,this.data.dateEnd,"xlsx").subscribe((blob)=>{
      this.downloadFile(blob,"xlsx","RankingDeProductos");
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
    });
  }else if(this.data.type==1){
    this.roviandaApi.getReportRankingOfProductsByProduct(this.data.presentationId,this.data.dateStart,this.data.dateEnd,"xlsx").subscribe((blob)=>{
      this.downloadFile(blob,"xlsx","RankingDeVendedoresPorProducto");
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
    });
  }else if(this.data.type==2){
    this.roviandaApi.getReportRankingOfSellers(this.data.dateStart,this.data.dateEnd,"xlsx").subscribe((blob)=>{
      this.downloadFile(blob,"xlsx","RankingDeVendedoresGeneral");
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
    });
  }else if(this.data.type==3){
    this.roviandaApi.downloadSummary(this.data.sellerId,this.data.dateStart,this.data.dateEnd,"xlsx").subscribe((blob)=>{
      this.downloadFile(blob,"xlsx","ReporteIndividual"+this.data.sellerName.trim().split(".").join(""));
      this.isLoading=false;
},err=>{
  this.isLoading=false;
});
  }
  }
  }
  downloadFile(data: any,type:string,reportType:string){
    let url = window.URL.createObjectURL(new Blob([data]));
    let a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = `${reportType}.${type}`;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

   closeModal(){
     this.matDialogRef.close();
   }
}
