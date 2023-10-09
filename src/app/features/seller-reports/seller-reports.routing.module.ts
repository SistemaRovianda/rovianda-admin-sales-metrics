import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SellerReportsComponent } from "./page/seller-reports.component";
import { SellerReportsModule } from "./page/seller-reports.module";

const routes:Routes=[
    {
        path:"",
        component:SellerReportsComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes),SellerReportsModule]
})
export class SellerReportsRoutingModule{}