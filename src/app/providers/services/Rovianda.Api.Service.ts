import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientVisitData } from 'src/app/features/sellers/models/SellerVisits';
import { Client, ClientUpdateRequest, DayVisited } from 'src/app/Models/Client';
import { ChartD3DataInterface, GeneralReportRequest, RankingSellerByProduct } from 'src/app/Models/Metrics';
import { ProductInterface } from 'src/app/Models/Product.Interface';
import { RankingSeller, SalesAcumulated } from 'src/app/Models/Sale.Model';
import { SellerAcumulated } from 'src/app/Models/Seller.Model';
import { Seller } from 'src/app/Models/User.Model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:"root"
})
export class RoviandaApiService{

    path:string = environment.basePath;
    pathAltern:string = "http://rovianda.ddns.net:3000/rovianda"
    constructor(private http:HttpClient){
    }

    getAllSales(page:number,peerPage:number,saleIds:Array<number>,date:string,folio:string,dateTo:string){
        let parameters:HttpParams= new HttpParams();
        parameters= parameters.set("page",page.toString());
        parameters=parameters.set("peerPage",peerPage.toString());
        parameters=parameters.set("date",date);
        if(folio!=null){
        parameters=parameters.set("hint",folio);
        }
        if(dateTo){
            parameters=parameters.set("dateTo",dateTo);
        }
        return this.http.post(`${this.path}/sales-superadmin/sales`,{sales:saleIds},{params:parameters,observe:"response"});
    }

    getAllSalesByForViews(page:number,peerPage:number,date:string,dateTo:string,folio:string){
        let parameters:HttpParams= new HttpParams();
        parameters= parameters.set("page",page.toString());
        parameters=parameters.set("peerPage",peerPage.toString());
        parameters=parameters.set("date",date);
        parameters=parameters.set("dateTo",dateTo);
        if(folio!=null){
        parameters=parameters.set("hint",folio);
        }
        
        return this.http.post(`${this.path}/sales-superadmin/sales`,{sales:[]},{params:parameters,observe:"response"});
    }

    getAllPreSalesByForViews(page:number,peerPage:number,date:string,dateTo:string,folio:string){
        let parameters:HttpParams= new HttpParams();
        parameters= parameters.set("page",page.toString());
        parameters=parameters.set("peerPage",peerPage.toString());
        parameters=parameters.set("date",date);
        parameters=parameters.set("dateTo",dateTo);
        if(folio!=null){
        parameters=parameters.set("hint",folio);
        }
        
        return this.http.post(`${this.path}/sales-superadmin/presales`,{sales:[]},{params:parameters,observe:"response"});
    }
    getTicket(saleId:number){
        let httpOptions:Object={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text'
        }
        return this.http.get(`${this.path}/sale-ticket/${saleId}`,httpOptions);
    }

    getPreSaleTicket(saleId:number){
        let httpOptions:Object={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text'
        }
        return this.http.get(`${this.path}/presale-ticket/${saleId}`,httpOptions);
    }

    delSalesOfSystem(salesIds:Array<number>,date:string){
        let params = new HttpParams();
        params = params.set("date",date);
        return this.http.post(`${this.path}/sales-superadmin/del`,salesIds,{params});
    }

    getReport(date:string){
        let params = new HttpParams();
        params = params.set("date",date);
        return this.http.post(`${this.path}/sales-superadmin/report-deleted`,{},{params,responseType:'blob'});
    }

    getAcumulated(from:string,to:string){
        let params = new HttpParams();
        params = params.set("dateFrom",from);
        params = params.set("dateTo",to);
        return this.http.get<SalesAcumulated>(`${this.path}/accumulated/sales`,{params});
    }

    getAllSellers(){
        return this.http.get<Seller[]>(`${this.path}/admin-sales/sellers`);
    }

    customerReassign(clientId:number,sellerUid:string){
        return this.http.put(`${this.path}/customer/reassign`,{clientId,sellerUid});
    }

    loadAcumulatedBySeller(sellerId:string,date:string,dateTo:string){
        let params:HttpParams = new HttpParams().set("from",date).set("to",dateTo);
        return this.http.get<SellerAcumulated>(`${this.path}/get-status/sales/${sellerId}`,{params});
    }

    downloadSummary(sellerId:string,date:string,dateTo:string,type:string){
        let params:HttpParams = new HttpParams().set("from",date).set("to",dateTo).set("type",type);
        return this.http.get(`${this.path}/report/seller/summary/${sellerId}`,{params,responseType:"blob"});
    }

    getClientOfSeller(sellerId:string){
        return this.http.get<Client[]>(`${this.path}/seller-clients/`+sellerId);
    }

    updateClient(clientId:number,clientUpdateRequest:ClientUpdateRequest){
        return this.http.put(`${this.path}/seller-client/`+clientId,{...clientUpdateRequest});
    }

    registerClient(sellerId:string,clientUpdateRequest:ClientUpdateRequest){
        return this.http.post(`${this.path}/admin-sales/client/`+sellerId,{...clientUpdateRequest});
    }

    getDaysVisit(clientId:number){
        return this.http.get<DayVisited>(`${this.path}/get-days-visit/`+clientId);
    }

    getLastCountClientRegister(){
        return this.http.get<{count:number}>(`${this.path}/client-register/last-count`);
    }
    deleteLogicClient(clientId:number){
        return this.http.delete(`${this.path}/client-delete/`+clientId);
    }
    getAllClients(){
        return this.http.get<Client[]>(`${this.path}/admin-sales/allclients`)
    }

    getAllProducts(){
        return this.http.get<ProductInterface[]>(`${this.path}/admin-sales/allproducts`);
    }

    getChartGeneralSalesMetrics(dateStart:string,dateEnd:string){
        let params = new HttpParams();
        params = params.set("dateStart",dateStart);
        params = params.set("dateEnd",dateEnd);
        return this.http.get<ChartD3DataInterface[]>(`${this.path}/metrics/general/admin-sales`,{params});
    }

    getRankingSellersByProduct(presentationId:number,dateStart:string,dateEnd:string){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd);
        return this.http.get<RankingSellerByProduct[]>(`${this.path}/metrics/general/rankin-sellers/`+presentationId,{params});
    }
    getRankingOfSellersByDate(dateStart:string,dateEnd:string){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd);
        return this.http.get<RankingSeller[]>(`${this.path}/metrics/general/ranking/sellers`,{params});
    }

    getReportRankingOfProducts(dateStart:string,dateEnd:string,type:string){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd).set("type",type);
        return this.http.get(`${this.path}/metrics/report/general/admin-sales`,{params,responseType:'blob'});
    }

    getReportRankingOfProductsByProduct(presentationId:number,dateStart:string,dateEnd:string,type:string){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd).set("type",type);
        return this.http.get(`${this.path}/metrics/report/general/rankin-sellers/`+presentationId,{params,responseType:'blob'});
    }

    getReportRankingOfSellers(dateStart:string,dateEnd:string,type:string){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd).set("type",type);
        
        return this.http.get(`${this.path}/report/metrics/general/ranking/sellers`,{params,responseType:'blob'});
    }

    getReportGeneral(dateStart,dateEnd:string,request:GeneralReportRequest){
        let params = new HttpParams().set("dateStart",dateStart).set("dateEnd",dateEnd);
        return this.http.post(`${this.path}/report/general/admin-sales`,{
            ...request
        },{params,responseType:'blob'});
    }

    downloadVisits(sellersIds:string[],date:string){
        return this.http.post(`${this.path}/report/visits`,{sellersIds,date},{responseType:"blob"});
    }
    downloadIncreasing(sellersIds:string[],month:number,year:number,oldYear:number,typePeriod:number){
        return this.http.post(`${this.path}/report/sold-period`,{sellersIds,month,year,oldYear,typePeriod},{responseType:"blob"});
    }

    downloadScheduleReport(sellersIds:string[],day:string){
        return this.http.post(`${this.path}/report/customer-schedule`,{sellersIds,day},{responseType:"blob"});
    }


    getVisits(sellerId:string,date:string){
        return this.http.post<ClientVisitData[]>(`${this.path}/customer/visits`,{sellerId,date});
    }

    getVisitsReport(sellerId:string,date:string){
        return this.http.post(`${this.path}/customer/visits-report`,{sellerId,date},{responseType:"blob"});
    }

    getDailyPreSales(folio:string,dateStart:string,dateEnd:string,format:string){
        let params = new HttpParams().set("format",format);
        return this.http.post(`${this.pathAltern}/daily-sale/presales/report`,{folio,dateStart,dateEnd},{params,responseType:"blob"});
    }
    getDailySalesDetails(folio:string,dateStart:string,dateEnd:string,format:string){
        let params = new HttpParams().set("format",format);
        return this.http.post(`${this.pathAltern}/daily-sale/details/sales/report`,{folio,dateStart,dateEnd},{params,responseType:"blob"});
    }
    getDailyPreSalesDetails(folio:string,dateStart:string,dateEnd:string,format:string){
        let params = new HttpParams().set("format",format);
        return this.http.post(`${this.pathAltern}/daily-sale/details/presales/report`,{folio,dateStart,dateEnd},{params,responseType:"blob"});
    }
    getEffectiveDeliverReport(folio:string,dateStart:string,dateEnd:string,format:string){
        let params = new HttpParams().set("format",format);
        return this.http.post(`${this.pathAltern}/effective-delivery/presales/report`,{folio,dateStart,dateEnd},{params,responseType:"blob"});
    }
    getVisitsDailyReport(dateStart:string,dateEnd:string,format:string){
        let params = new HttpParams().set("format",format);
        return this.http.post(`${this.pathAltern}/visits-aday/sellers/report`,{dateStart,dateEnd},{params,responseType:"blob"});
    }
}
