import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/dashboard-page/dashboard-page.component';
import { DashboardPageModule } from './features/dashboard/dashboard-page/dashboard-page.module';
import { LoggedGuard } from './features/guards/logged.guard';
import { HomeComponent } from './features/home/page/home.component';
import { HomeModule } from './features/home/page/home.module';
import { SellerReportsComponent } from './features/seller-reports/page/seller-reports.component';
import { SellerReportsModule } from './features/seller-reports/page/seller-reports.module';
import { SellersPageComponent } from './features/sellers/sellers-page/sellers-page.component';
import { SellersPageModule } from './features/sellers/sellers-page/sellers-page.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    loadChildren: () =>
      import("./features/landing/landing.router.module").then(m => m.LayoutRouterModule),
  },
  // {
  //   path: "home",
  //   loadChildren: () =>
  //     import("./features/home/home.router.module").then(m => m.HomeRouterModule),
  // },
  // {
  //   path: "warehouses",
  //   loadChildren:()=> import("./features/warehouse/page/page.module").then(m=>m.PageModule)
  // },
  // {
  //   path:"sellers/reports",
  //   loadChildren:()=>import("./features/seller-reports/sellers-reports.router.module").then(m=>m.SellerReportsRouterModule)
  // },
  {
    path:"dashboard",
    component: DashboardPageComponent,
    canActivate:[LoggedGuard],
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo:"ventas-generales"
      },
      {
        path:"ventas-generales",
        canActivate:[LoggedGuard],
        loadChildren: ()=>import("./features/home/home.router.module").then(m=>m.HomeRouterModule)
      },
      {
        path:"vendedores",
        canActivate:[LoggedGuard],
        loadChildren:()=>import("./features/sellers/seller-page.router.module").then(m=>m.SellersPageRouterModule)
      },
      {
        path:"reportes",
        canActivate:[LoggedGuard],
        loadChildren:()=>import("./features/seller-reports/seller-report.router.module").then(m=>m.SellerReportsRouterModule)
      },
      {
        path:"listado",
        canActivate:[LoggedGuard],
        loadChildren:()=>import("./features/list/list.router.module").then(m=>m.ListRouterModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),DashboardPageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
