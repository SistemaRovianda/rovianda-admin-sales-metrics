import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListSalesPresalesComponent } from "./page/list-sales-presales.component";
import { ListSalesPresalesModule } from "./page/list-sales-presales.module";

const routes:Routes=[
    {
        path:"",
        component:ListSalesPresalesComponent
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes),ListSalesPresalesModule]
})
export class ListRoutingModule{}