import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SellersPageRoutingModule } from "./seller-page.routing.module";

@NgModule({
    exports:[CommonModule,SellersPageRoutingModule]
})
export class SellersPageRouterModule{}