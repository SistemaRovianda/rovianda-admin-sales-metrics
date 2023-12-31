import { createAction, props } from "@ngrx/store";
import { Sale, SalesAcumulated } from 'src/app/Models/Sale.Model';
import { StringDecoder } from "string_decoder";

export const getAllSalesForSuperAdmin=createAction("[SUPERADMIN] getting all sales",props<{page:number,peerPage:number,saleIds:Array<number>,date:string,folio:string,dateTo:string}>());
export const setAllSalesForSuperAdmin=createAction("[SUPERADMIN] setting all sales",props<{sales:Sale[],count:number}>());
export const sendAllRemovesToSystem=createAction("[SUPERADMIN] setting sales to system",props<{salesIds:Array<number>}>());
export const sendAllRemovesToSystemSuccess=createAction("[SUPERADMIN] setting sales to system Success");
export const sendAllRemovesToSystemError=createAction("[SUPERADMIN] setting sales to system Error");

export const addRemoveSale = createAction("[SUPERADMIN] remove sale",props<{id:number}>());
export const popRemoveSale = createAction("[SUPERADMIN] pop remove sale",props<{id:number}>());

export const getTicketOfSale = createAction("[SUPERADMIN] getting ticket",props<{saleId:number}>());
export const setTicketOfSale = createAction("[SUPERADMIN] setting ticket",props<{ticket:string}>());

export const deleteSalesSuperAdmin = createAction("[SUPERADMIN] deleting sales",props<{salesIds:Array<number>,date:string}>());
export const deleteSalesSuperAdminSuccess = createAction("[SUPERADMIN] deleting sales success");
export const deleteSalesSuperAdminFail = createAction("[SUPERADMIN] deleting sales fail",props<{error:string}>());

export const getAcumulated = createAction("[SUPERADMIN] get acumulated",props<{dateFrom:string,dateTo:string}>());
export const setAcumulated = createAction("[SUPERADMIN] set acumulated",props<SalesAcumulated>());