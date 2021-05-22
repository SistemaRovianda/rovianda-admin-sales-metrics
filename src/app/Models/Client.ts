export interface Client{
    id: number,
    idAspel: string,
    typeClient: string,
    keyClient: number,
    name: string,
    phone: number,
    credit: number,
    cfdi: string,
    paymentSat:string,
    currentCredit: number,
    daysCredit: number,
    dayCharge: number,
    rfc: string,
    curp: string,
    clasification: string,
    hasDebts: boolean,
    status:string,
    keySaeNew: string,
    address:ClientAddress
}

export interface ClientAddress{
    id: number,
    street: string,
    extNumber: number,
    intNumber: number,
    intersectionOne: string,
    intersectionTwo: string,
    suburb: string,
    location: string,
    reference: string,
    population: string,
    cp: number,
    state: string,
    municipality: string,
    nationality: string
}

export interface ClientUpdateRequest{
    keyClientId?:number,
    name: string,
    street: string,
    suburb: string,
    cp: number,
    state: string,
    city:string,
    keySaeNew: string,
    daysVisited:{
        id: number,
        monday: boolean,
        tuesday: boolean,
        wednesday: boolean,
        thursday: boolean,
        friday: boolean,
        saturday: boolean,
        sunday: boolean
    }
}

export interface DayVisited{

    daysVisitedId:number;

    
    monday:boolean;

    
    tuesday:boolean;

    
    wednesday:boolean;

    
    thursday:boolean;

    
    friday:boolean;

    
    saturday:boolean;

    
    sunday:boolean;

    
}