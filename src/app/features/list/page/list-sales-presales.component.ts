import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PreSaleInterface, SaleInterface } from 'src/app/Models/SalePresaleModels';
import { Paginator } from 'src/app/Models/paginator';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { TicketdetailsComponent } from '../components/ticketdetails/ticketdetails.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-sales-presales',
  templateUrl: './list-sales-presales.component.html',
  styleUrls: ['./list-sales-presales.component.scss']
})
export class ListSalesPresalesComponent implements OnInit {

  constructor(private roviandaApiService: RoviandaApiService,private dialog:MatDialog) { }
  listSales:SaleInterface[]=[];
  listPreSales:PreSaleInterface[]=[];
  totalCount:number=0;
  isDownloading:boolean=false;
  get date(){
    return this.form.get("date");
  }
  get dateTo(){
    return this.form.get("dateTo");
  }
  get folio(){
    return this.form.get("folio");
  }
  form:FormGroup;
  formReport:FormGroup;
  section="SALES";
  page:number=0;
  perPage:number=20;
  pages:Paginator[]=[];

  get typeReport(){
    return this.formReport.get("typeReport");
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(null,Validators.required),
      dateTo: new FormControl(null,Validators.required),
      folio: new FormControl(null)
    });
    this.formReport = new FormGroup({
      typeReport: new FormControl("DETAILS_SALES",Validators.required)
    });
  }

  search(){
    let dateParsed = this.getParseDate(new Date(this.date.value));
    let dateParsedTwo = this.getParseDate(new Date(this.dateTo.value));
    if(this.section=="SALES"){
      this.roviandaApiService.getAllSalesByForViews(this.page,this.perPage,dateParsed,dateParsedTwo,this.folio.value).subscribe((resp)=>{
        this.listSales = resp.body as SaleInterface[];
        this.totalCount = +resp.headers.get("x-total-count");
        this.setPages();
      },(err)=>{
        console.log("Error: "+err.message);
      });
    }else{
      this.roviandaApiService.getAllPreSalesByForViews(this.page,this.perPage,dateParsed,dateParsedTwo,this.folio.value).subscribe((resp)=>{
        this.listPreSales = resp.body as PreSaleInterface[];
        this.totalCount = +resp.headers.get("x-total-count");
        this.setPages();
      },(err)=>{
        console.log("Error: "+err.message);
      });
    }
  }

  maxPage:number=10;
  minPage:number=0;
  setPages(){
    this.pages=[];
    if(this.totalCount!=0){
      let pagesCount = Math.ceil(this.totalCount/this.perPage);
      
      let maxPage=(pagesCount<10)?pagesCount:this.maxPage;
      let minPage=this.minPage;

      if((this.page+1)==this.maxPage && pagesCount>this.maxPage){
        this.maxPage++;
        this.minPage++;
        maxPage=this.maxPage;
        minPage=this.minPage;
      }
      if(this.page==this.minPage && this.minPage>0 ){
        this.minPage--;
        this.maxPage--;
        maxPage=this.maxPage;
        minPage=this.minPage;
      }
      for(let i=minPage;i<maxPage;i++){
        let objectPaginator:Paginator={
          page: (i+1),
          selected: this.page==i
        };
        this.pages.push(objectPaginator);
      }
    
    }else{
      this.pages=[];
      this.pages.push({page:1,selected:false});
    }

  }

 

  getParseDate(date:Date){
    let day = date.getDate().toString();
    let month= (date.getMonth()+1).toString()
    let year = date.getFullYear().toString();
    if(+day<10){
      day="0"+day;
    }
    if(+month<10){
      month="0"+month;
    }
    return year+"-"+month+"-"+day;
  }

  selectSales(){
    this.section="SALES";
    this.typeReport.setValue("DETAILS_SALES");
    this.resetList();
  }
  selectPreSales(){
    this.section="PRESALES";
    this.typeReport.setValue("DETAILS_SALES");
    this.resetList();
  }
  resetList(){
    this.listSales=[];
    this.listPreSales=[];
    this.page=0;   
    this.minPage=0;
    this.maxPage=10;
    this.totalCount=0;
    this.setPages(); 
  }

  paginate(pageItem:Paginator){
    this.page=pageItem.page-1;
    this.search();
  }

  paginateToStart(){
    this.page=0;
    this.search();
  }

  paginateToEnd(){
    let pagesCount = Math.ceil(this.totalCount/this.perPage);
    
    this.page=(pagesCount)-1;
    this.search();
  }
  isLoading:boolean=false;
  ticket:string="";
  showSaleDetails(event:any){
    
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApiService.getTicket(event).subscribe((result)=>{
          this.ticket=result as string;
          this.openModalTicket();
          this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
      });
    }
    
  }

  showPreSaleDetails(event:any){
   
    if(!this.isLoading){
      this.isLoading=true;
      this.roviandaApiService.getPreSaleTicket(event).subscribe((result)=>{
        this.ticket=result as string;
        this.openModalTicket();
        this.isLoading=false;
      },(err)=>{
        this.isLoading=false;
      });
    }
  
  }
  openModalTicket(){
    this.dialog.open(TicketdetailsComponent,{
      data:{
        ticket: this.ticket
      }
    });
  }

  getPdf(){
    if(!this.isDownloading && this.date.valid && this.dateTo.valid){
      this.isDownloading=true;
      if(this.section=="SALES"){
        switch(this.typeReport.value){
          case "DETAILS_SALES":
            this.roviandaApiService.getDailySalesDetails(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "EFFECTIVE_ORDER_DELIVER":
            this.roviandaApiService.getEffectiveDeliverReport(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "VISITS":
            this.roviandaApiService.getVisitsDailyReport(this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
        }
      }else{
        switch(this.typeReport.value){
          case "DETAILS_SALES":
            this.roviandaApiService.getDailyPreSalesDetails(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "DAILY_SALE":
            this.roviandaApiService.getDailyPreSales(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "EFFECTIVE_ORDER_DELIVER":
            this.roviandaApiService.getEffectiveDeliverReport(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"PDF").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.showBlob(blob);
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
        }
      }
    }
  }

  getExcel(){
    if(!this.isDownloading && this.date.valid && this.dateTo.valid){
      this.isDownloading=true;
      if(this.section=="SALES"){
        switch(this.typeReport.value){
          case "DETAILS_SALES":
            this.roviandaApiService.getDailySalesDetails(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"DetalleDeVenta");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "EFFECTIVE_ORDER_DELIVER":
            this.roviandaApiService.getEffectiveDeliverReport(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"EfectividadPedidoEntrega");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "VISITS":
            this.roviandaApiService.getVisitsDailyReport(this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"VisitaDiaria");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
        }
      }else{
        switch(this.typeReport.value){
          case "DETAILS_SALES":
            this.roviandaApiService.getDailyPreSalesDetails(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"DetalleDePreVenta");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "DAILY_SALE":
            this.roviandaApiService.getDailyPreSales(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"VentaDiariaPreventa");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
          case "EFFECTIVE_ORDER_DELIVER":
            this.roviandaApiService.getEffectiveDeliverReport(this.folio.value,this.getParseDate(new Date(this.date.value)),this.getParseDate(new Date(this.dateTo.value)),"EXCEL").subscribe({
              next:(blob)=>{
                this.isDownloading=false;
                this.downloadFile(blob,this.getParseDate(new Date(this.date.value))+"-TO-"+this.getParseDate(new Date(this.date.value)),"EfectividadPedidoEntrega");
              },
              error:()=>{
                this.isDownloading=false;
              }
            });
            break;
        }
      }
    }
  }

  showBlob(blobDocument:any){
    let file = new Blob([blobDocument], { type: 'application/pdf' });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL); 
  }
  downloadFile(data: any, date: string,type:string) {
    var url = window.URL.createObjectURL(new Blob([data]));
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `Reporte${type}${date}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }
}
