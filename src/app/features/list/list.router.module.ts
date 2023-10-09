import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListRoutingModule } from "./list.routing.module";

@NgModule({
    exports:[CommonModule,ListRoutingModule]
})
export class ListRouterModule{}