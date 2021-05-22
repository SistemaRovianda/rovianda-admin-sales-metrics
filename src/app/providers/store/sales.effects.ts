import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, switchMap } from 'rxjs/operators';
import { Sale } from 'src/app/Models/Sale.Model';
import { RoviandaApiService } from '../services/Rovianda.Api.Service';
import * as saleActions from "./sales.actions";
import { getAcumulated } from './sales.actions';
@Injectable({
    providedIn:"root"
})
export class SaleEffects{

    constructor(private roviandaApi:RoviandaApiService,private actions:Actions){
    }

    getAllSales$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getAllSalesForSuperAdmin),
        exhaustMap((action)=>this.roviandaApi.getAllSales(action.page,action.peerPage,action.saleIds,action.date,action.folio,action.dateTo).pipe(
            switchMap((response)=>[saleActions.setAllSalesForSuperAdmin({sales:response.body as Sale[],count:+response.headers.get('x-total-count')}),
            getAcumulated({dateFrom:action.date,dateTo:action.dateTo})]),
            catchError(()=>[saleActions.setAllSalesForSuperAdmin({sales:[],count:0})])
        ))
    ));

    getTicket$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getTicketOfSale),
        exhaustMap((action)=>this.roviandaApi.getTicket(action.saleId).pipe(
            switchMap((response)=>{
                //console.log("TICKET",response);
                return [saleActions.setTicketOfSale({ticket:response as string})]
            }),
            catchError((err)=>{
                //console.log("ERROR",err);
                return [saleActions.setTicketOfSale({ticket:""})]
            })
        ))
    ))

    getAcumulated$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.getAcumulated),
        exhaustMap((action)=>this.roviandaApi.getAcumulated(action.dateFrom,action.dateTo).pipe(
            switchMap((res)=>[saleActions.setAcumulated(res)]),
            catchError((err)=>[saleActions.setAcumulated({contado:"0",credito:"0",total:"0",cobranza:"0"})])
        )))
    )

    deleteSales$ = createEffect(()=>this.actions.pipe(
        ofType(saleActions.deleteSalesSuperAdmin),
        exhaustMap((action)=>this.roviandaApi.delSalesOfSystem(action.salesIds,action.date).pipe(
            switchMap(()=>[saleActions.deleteSalesSuperAdminSuccess()]),
            catchError((err)=>[saleActions.deleteSalesSuperAdminFail({error:err.message})])
        ))
    ))

}