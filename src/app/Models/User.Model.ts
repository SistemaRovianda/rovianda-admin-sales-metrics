

export interface User{
    uid?: string;
    token?: string;
    currentToken?: string;
    name?: string;
    email?: string;
    rol?: string;
    cve?:string;
    isLoading?:boolean,
    amountAcumulated?:string;
    weightAcumulated?:number;
    dateStart:any;
    dateEnd:any;
}


export interface Seller{
    id:string;
    saeKey:number,
    name: string;
    email: string,
    job:string,
    warehouseKeySae:string,
    status: string,
    cve: string
}