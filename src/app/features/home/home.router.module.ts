import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home.routing.module";

@NgModule({
    exports:[CommonModule,HomeRoutingModule]
})
export class HomeRouterModule{}