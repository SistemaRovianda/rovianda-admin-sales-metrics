import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { Subscription } from 'rxjs';
import { AppState } from 'src/app/Models/App.State';
import { Sale } from 'src/app/Models/Sale.Model';
import { addRemoveSale, getAllSalesForSuperAdmin, popRemoveSale } from 'src/app/providers/store/sales.actions';
import { getAllSalesSelector, getLoaginStatusSelector, getTotalCountSelector, getTotalSalesRemoveSelector } from 'src/app/providers/store/sales.selectors';
import { isFunction } from 'util';
import { ModalShowSaleComponent } from '../modal-show-sale/modal-show-sale.component';

@Component({
  selector: 'app-table-sales',
  templateUrl: './table-sales.component.html',
  styleUrls: ['./table-sales.component.scss']
})
export class TableSalesComponent implements OnInit,OnDestroy {

  dataSource:MatTableDataSource<Sale>;
  displayedColumns: string[] = ['No.', 'Folio','Vendedor', 'Fecha', 'Monto','Review'];
  count:number=0;
  pageSize:number=10;
  pageIndex:number=0;
  pageSizeOptions:Array<number>=[10,5];
  loading:boolean=false;
  sales:Sale[]=[
    // {
    //   saleId:1,
    //   folio:"000001",
    //   amount:120,
    //   date: "18-11-2020",
    //   seller:{ 
    //     name: "José Luis Gonzalez"
    //   }
    // },
    // { saleId:2,
    //   folio:"00002",
    //   amount:330,
    //   date: "19-11-2020",
    //   seller:{ 
    //     name:"José Luis Gonzalez"
    //   }
    // },
    // { saleId:3,
    //   folio:"00003",
    //   amount:440,
    //   date: "20-11-2020",
    //   seller: {
    //     name:"José Luis Gonzalez"
    //   } 
    // }
  ];

  salesIds:Array<Sale>=[];
  form:FormGroup;
  constructor(private store:Store<AppState>,private dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.sales;
    this.form = new FormGroup({
      folio: new FormControl(null,Validators.required)
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  get folio(){
    return this.form.get("folio");
  }
private subscription:Subscription;
  dateStr:string="";
  from:string=null;
  to:string=null;
  ngOnInit(): void {
    this.subscription = new Subscription();
    let date=new Date();
    //console.log(date.toString());
    date.setHours(date.getHours()-18);
    
    let year = date.getFullYear();


    let month = ((date.getMonth()+1)<10)?'0'+(date.getMonth()+1):(date.getMonth()+1);
    let day = (date.getDate()<10)?'0'+date.getDate():date.getDate();
    this.dateStr= year+"-"+month+'-'+day;
    this.from=this.dateStr;
    this.to=this.dateStr;
    this.store.dispatch(getAllSalesForSuperAdmin({page:this.pageIndex,peerPage:this.pageSize,saleIds:this.salesIds.map((x)=>x.saleId),date:this.from,folio:this.folio.value,dateTo:this.to}));
    this.subscription.add(this.store.select(getAllSalesSelector).subscribe((sales:Sale[])=>{
      let idsOmited = this.salesIds.map(x=>x.saleId);
      this.sales = sales.filter(x=>!idsOmited.includes(x.saleId));
    
      this.dataSource.data=this.sales;
    }));
    this.subscription.add(this.store.select(getLoaginStatusSelector).subscribe((loading)=>{
      this.loading=loading;
    }));
    this.subscription.add(this.store.select(getTotalCountSelector).subscribe((count)=>{
      this.count=count;
    }));
    this.subscription.add(
      this.store.select(getTotalSalesRemoveSelector).subscribe((salesIds)=>{
        this.salesIds = salesIds;
        this.search(null);
      })
    );
  }

  searchByFolio(){
    this.store.dispatch(getAllSalesForSuperAdmin({page:this.pageIndex,peerPage:this.pageSize,saleIds:this.salesIds.map((x)=>x.saleId),date:this.from,folio:this.folio.value?(this.folio.value).toString():null,dateTo:this.to}));
  }

  search(event:{pageIndex:number,pageSize}){
    //console.log(event);
    if(event!=null){
    this.pageSize=event.pageSize;
    this.pageIndex=event.pageIndex;
    }
    this.store.dispatch(getAllSalesForSuperAdmin({page:this.pageIndex,peerPage:this.pageSize,saleIds:this.salesIds.map((x)=>x.saleId),date:this.from,folio:this.folio.value?(this.folio.value).toString():null,dateTo:this.to}));
  }

  searchByDate(from:string,to:string){
    
    if(from && to){
      let dateFrom = new Date(from);
      let year = dateFrom.getFullYear();
      let month = ((dateFrom.getMonth()+1)<10)?'0'+(dateFrom.getMonth()+1):(dateFrom.getMonth()+1);
      let day = (dateFrom.getDate()<10)?'0'+dateFrom.getDate():dateFrom.getDate();
      this.from = `${year}-${month}-${day}`;
      let dateTo = new Date(to);
      let year2 = dateTo.getFullYear();
      let month2 = ((dateTo.getMonth()+1)<10)?'0'+(dateTo.getMonth()+1):(dateTo.getMonth()+1);
      let day2 = (dateTo.getDate()<10)?'0'+dateTo.getDate():dateTo.getDate();
      this.to = `${year2}-${month2}-${day2}`;
      
      this.store.dispatch(getAllSalesForSuperAdmin({page:this.pageIndex,peerPage:this.pageSize,saleIds:this.salesIds.map((x)=>x.saleId),date:this.from,folio:this.folio.value?(this.folio.value).toString():null,dateTo:this.to }));
    }
  }

  inspect(id:number){
    //console.log("removiendo: "+id);
    let sale=this.sales.filter(x=>x.saleId==id)[0];
    const dialogRef = this.dialog.open(ModalShowSaleComponent,{
      data:{
        sale
      }
    });
    dialogRef.afterClosed().subscribe((result)=>{
      //console.log("result: "+result);
      // if(result!=null){
      //   this.store.dispatch(addRemoveSale({id:result}));
      // }
    })
    //this.store.dispatch(addRemoveSale({id}));
  }

  pipeNumber(x:number){
    var parts=x.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
  }

  pipeDate(date:string){
    let dateSplited =date.split('T');
    let dateStr = dateSplited[0];
    let hour= dateSplited[1].split(':')[0];
    let min =  dateSplited[1].split(':')[1];
    return `${dateStr} ${hour}:${min}`;
  }

  

}
