export interface Sale{
    saleId:number;
    date:string;
    hour?:string;
    amount:number;
    folio:string;
    seller:{
        name:string;
        email?:string;
    }
}


export interface SalesAcumulated{total:number,contado:number,credito:number,cobranza:number,totalKg:number};

export interface RankingSeller{
    amount:number,
    weight:number,
    name:string;
    sellerId:string;
    selected:boolean
}