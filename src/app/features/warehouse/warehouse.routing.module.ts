import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from "./page/page.component";
import { PageModule } from "./page/page.module";

const routes:Routes=[
    {
        path:"",
        component:PageComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        PageModule
    ],
    exports:[
        RouterModule
    ]
})
export class WarehouseRoutingModule{} 