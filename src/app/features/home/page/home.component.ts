
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { ChartD3DataInterface } from 'src/app/Models/Metrics';
import { Sale, SalesAcumulated } from 'src/app/Models/Sale.Model';
import { AuthService } from 'src/app/providers/services/Auth.Service';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import {  deleteSalesSuperAdmin, getAcumulated, popRemoveSale } from 'src/app/providers/store/sales.actions';
import { getAcumulatedSelector, getDeletingStatus, getTotalAcumulatedSelector, getTotalSalesRemoveSelector } from 'src/app/providers/store/sales.selectors';
import { ChartSalesComponent } from '../components/chart-sales/chart-sales.component';
import { ModalConfirmRemoveComponent } from '../components/modal-confirm-remove/modal-confirm-remove.component';
import { ModalListSalesTakedComponent } from '../components/modal-list-sales-taked/modal-list-sales-taked.component';
import { RankingProductsComponent } from '../components/ranking-products/ranking-products.component';
import { SellersRankingComponent } from '../components/sellers-ranking/sellers-ranking.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("chart") charComponent:ChartSalesComponent;

  count:number=0;
  acumulated$:Observable<number> = this.store.select(getTotalAcumulatedSelector);
  totalSalesRemoved:Sale[] =[];
  username:string="";
  section:string="sales";
  constructor(private store:Store<AppState>,private dialog:MatDialog,private roviandaApi:RoviandaApiService,private firebaseService:AuthService,private router:Router) {
    this.subscription= new Subscription();
  }
  dateStr:string="";
  private subscription:Subscription;
  isDeleting:boolean=false;
  isLoading:boolean=false;
  hasDeleted:boolean=false;
  isDownloadingReport:boolean=false;
  form:FormGroup;
  TotalSales:number=0;
  TotalCredit:number=0;
  TotalCob:number=0;
  acumulated:SalesAcumulated={cobranza:0,total:0,credito:0,contado:0,totalKg:0};
  ngOnInit(): void {
    this.form=new FormGroup({
      from: new FormControl(new Date(),Validators.required),
      to: new FormControl(new Date(),Validators.required)
    });
    this.username = localStorage.getItem("username");
    let date=new Date();
    let year = date.getFullYear();
    date.setHours(date.getHours()-18)
    let month=((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):date.getMonth()+1;
    let day=(date.getDate()<10)?'0'+date.getDate():date.getDate();
    this.dateStr=year+'-'+month+'-'+day;
    this.subscription.add(this.store.select(getTotalSalesRemoveSelector).subscribe((salesIds)=>{
      console.log(salesIds.map(x=>x.saleId));
      this.totalSalesRemoved=salesIds;
    }));
    this.subscription.add(this.store.select(getDeletingStatus).subscribe((isDeleting)=>{
      if(this.isDeleting==true && isDeleting==false){
        setTimeout(()=>{
          this.isDeleting=isDeleting;
          this.hasDeleted=true;
        },10000);
      }else{
        this.isDeleting=isDeleting;
      }
    }));
    this.subscription.add(this.store.select(getAcumulatedSelector).subscribe((acumulated)=>{
      this.acumulated = acumulated;
    }));
  }

  get from(){
    return this.form.get("from");
  }
  get to(){
    return this.form.get("to");
  }

  restore(){
    if(this.totalSalesRemoved.length){
    let id=this.totalSalesRemoved[this.totalSalesRemoved.length-1].saleId;
    this.store.dispatch(popRemoveSale({id}));
    }
  }

  showSalesTaked(){
    const dialogRef = this.dialog.open(ModalListSalesTakedComponent);
    
  }
  data2:ChartD3DataInterface[]=[];
  productTop:ChartD3DataInterface=null;
  getAcumulatedbyDates(){
    if(this.form.valid && !this.isLoading){
      this.isLoading=true;
      this.roviandaApi.getChartGeneralSalesMetrics(this.parseDate(this.from.value),this.parseDate(this.to.value)).subscribe((data)=>{
        this.data2=data.sort((a,b)=>b.amount-a.amount);   
        this.charComponent.getDataChart(this.data2);
        this.isLoading=false;
        if(this.data2.length){
          this.productTop=this.data2[0];
        }
      },(err)=>{
        this.data2=[];
        this.isLoading=false;
      })
    this.store.dispatch(getAcumulated({dateFrom:this.parseDate(this.from.value),dateTo:this.parseDate(this.to.value)}))
    //this.charComponent.getDataChart(this.parseDate(this.from.value),this.parseDate(this.to.value));
    }
  }

  openListProductRank(){
    this.dialog.open(RankingProductsComponent,{
      data:{
        products: this.data2.sort((a,b)=>b.amount-a.amount),
        dateStart: this.parseDate(this.from.value),
        dateEnd: this.parseDate(this.to.value)
      }
    });
  }

  openListSellersRank(){
    this.dialog.open(SellersRankingComponent,{
      data:{
        dateStart: this.parseDate(this.from.value),
        dateEnd: this.parseDate(this.to.value)
      }
    });
  }

  parseDate(dateStr:string){
    let dateFrom = new Date(dateStr);
    let year = dateFrom.getFullYear();
    let month = ((dateFrom.getMonth()+1)<10)?'0'+(dateFrom.getMonth()+1):(dateFrom.getMonth()+1);
    let day = (dateFrom.getDate()<10)?'0'+dateFrom.getDate():dateFrom.getDate();
    return `${year}-${month}-${day}`;  
  }

  confirm(){
    if(this.totalSalesRemoved.length){
    const dialogRef = this.dialog.open(ModalConfirmRemoveComponent);
    dialogRef.afterClosed().subscribe((desicion)=>{
      if(desicion){
        this.store.dispatch(deleteSalesSuperAdmin({salesIds:this.totalSalesRemoved.map(x=>x.saleId),date:this.dateStr}));
        console.log("Borrar");
      }else{
        console.log("Declino");
      }
    })
    }
  }

  
  loadSellerSection(){
    this.section="sellers";
  }
  loadSalesSection(){
    this.section="sales";
  }

  getAcumulatedByDate(){
    
  }

  getReport(){
    this.isDownloadingReport=true;
    this.roviandaApi.getReport(this.dateStr).subscribe((data)=>{
        this.downloadFile(data);
        this.isDownloadingReport=false;
    });
  }

  downloadFile(data: any){
    var url = window.URL.createObjectURL(new Blob([data]));
  
     // Debe haber una manera mejor de hacer esto...
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = `deleted.pdf`;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }
   logout(){
      this.firebaseService.signOut().subscribe(()=>{
        localStorage.clear();
          this.router.navigate(["login"]);
      });
   }

   parseAmount(number:number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  loadSellersReportsSection(){
    this.router.navigateByUrl("sellers/reports")
  }
}
