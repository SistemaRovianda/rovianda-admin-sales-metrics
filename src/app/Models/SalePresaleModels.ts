export interface SaleInterface{
    saleId:number,
    folio:string,
    typeSale:string,
    seller:{
        name:string
    },
    date: string,
    amount:number
}

export interface PreSaleInterface{
    preSaleId:number,
    preSaleUser:string,
    date:string,
    dateDelivered:string,
    status:string,
    amount:number
}