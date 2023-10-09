import { LayoutModule } from "./layout/layout.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";

const routes:Routes=[
    {
        path:"",
        component:LayoutComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        LayoutModule
    ],
    exports:[
        RouterModule
    ]
})
export class LayoutRoutingModule{} 