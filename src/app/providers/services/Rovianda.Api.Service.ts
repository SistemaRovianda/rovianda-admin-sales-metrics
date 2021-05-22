import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, ClientUpdateRequest, DayVisited } from 'src/app/Models/Client';
import { SalesAcumulated } from 'src/app/Models/Sale.Model';
import { SellerAcumulated } from 'src/app/Models/Seller.Model';
import { Seller } from 'src/app/Models/User.Model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:"root"
})
export class RoviandaApiService{

    path:string = environment.basePath;
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

    getTicket(saleId:number){
        let httpOptions:Object={
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        }),
        responseType:'text'
        }
        return this.http.get(`${this.path}/sale-ticket/${saleId}`,httpOptions);
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

    loadAcumulatedBySeller(sellerId:string,date:string){
        let params:HttpParams = new HttpParams().set("date",date);
        return this.http.get<SellerAcumulated>(`${this.path}/get-status/sales/${sellerId}`,{params});
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
}
