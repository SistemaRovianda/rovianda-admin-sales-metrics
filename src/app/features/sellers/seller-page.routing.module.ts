import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SellersPageComponent } from "./sellers-page/sellers-page.component";
import { SellersPageModule } from "./sellers-page/sellers-page.module";

const routes:Routes=[
    {
        path:"",
        component:SellersPageComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes),SellersPageModule]
})
export class SellersPageRoutingModule{}