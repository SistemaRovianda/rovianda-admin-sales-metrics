
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { Sale, SalesAcumulated } from 'src/app/Models/Sale.Model';
import { AuthService } from 'src/app/providers/services/Auth.Service';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import {  deleteSalesSuperAdmin, popRemoveSale } from 'src/app/providers/store/sales.actions';
import { getAcumulatedSelector, getDeletingStatus, getTotalAcumulatedSelector, getTotalSalesRemoveSelector } from 'src/app/providers/store/sales.selectors';
import { ModalConfirmRemoveComponent } from '../components/modal-confirm-remove/modal-confirm-remove.component';
import { ModalListSalesTakedComponent } from '../components/modal-list-sales-taked/modal-list-sales-taked.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  count:number=0;

  acumulated$:Observable<number> = this.store.select(getTotalAcumulatedSelector);
  totalSalesRemoved:Sale[] =[];
  username:string="";
  section:string="sellers";
  constructor(private store:Store<AppState>,private dialog:MatDialog,private roviandaApi:RoviandaApiService,private firebaseService:AuthService,private router:Router) {
    this.subscription= new Subscription();
  }
  dateStr:string="";
  private subscription:Subscription;
  isDeleting:boolean=false;
  hasDeleted:boolean=false;
  isDownloadingReport:boolean=false;
  form:FormGroup;
  TotalSales:number=0;
  TotalCredit:number=0;
  TotalCob:number=0;
  acumulated:SalesAcumulated={cobranza:"0",total:"0",credito:"0",contado:"0"};
  ngOnInit(): void {
    this.form=new FormGroup({
      from: new FormControl(null,Validators.required),
      to: new FormControl(null,Validators.required)
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
}
