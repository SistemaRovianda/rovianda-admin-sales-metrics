export interface ChartD3DataInterface{
    presentationId:number;
    amount:number,
    quantity:number,
    name:string,
    typePresentation:string,
    price:number,
    uniMed:string
}

export interface RankingSellerByProduct{
    amount:number,
    quantity:number,
    sellerId:string;
    name:string
}

export interface GeneralReportRequest{
    type:string,
    sellersIds:string[],
    productsIds:number[],
    clientsIds:number[]
}