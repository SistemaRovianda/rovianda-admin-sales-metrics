import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SellerReportsRoutingModule } from "./seller-reports.routing.module";

@NgModule({
    exports:[CommonModule,SellerReportsRoutingModule]
})
export class SellerReportsRouterModule{}