import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ClientVisitData } from '../../models/SellerVisits';

@Component({
  selector: 'app-seller-route',
  templateUrl: './seller-route.component.html',
  styleUrls: ['./seller-route.component.scss']
})
export class SellerRouteComponent implements OnInit {
isLoading:boolean=false;
iconGreen=  {
    url: 'https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png',
    scaledSize: {
        width: 20,
        height: 30
    }
}

iconRed={
  url: 'https://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_red.png',
    scaledSize: {
        width: 20,
        height: 30
    }
}


  sellerName="";
  currentDate="";
  lat = 18.849018;
  lng = -97.099599;

form:FormGroup;
constructor(@Inject(MAT_DIALOG_DATA) public data:{sellerName:string,sellerId:string},
  private roviandaApi:RoviandaApiService,
  private matDialogRef:MatDialogRef<SellerRouteComponent>
  ){
    this.sellerName=data.sellerName;
    this.currentDate=this.getCurrentDate();
  }
  visited:ClientVisitData[]=[];
  visitedWithoutSales:ClientVisitData[]=[];
  allVisitedWithSale:ClientVisitData[]=[];
  allVisitedWithoutSales:ClientVisitData[]=[];
  get date(){
    return this.form.get("date");
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl()
    });
    this.date.valueChanges.subscribe((date:Date)=>{
      this.currentDate= this.getCurrentDate(new Date(date));
      this.searchVisits();
    })
    this.searchVisits();
  }

  searchVisits(){
    this.isLoading=true;
    this.roviandaApi.getVisits(this.data.sellerId,this.currentDate).subscribe((visits)=>{
      this.visited=[];
      this.visitedWithoutSales=[];
      this.allVisitedWithSale=[];
      this.allVisitedWithoutSales=[];
        for(let visit of visits){
          if(visit.latitude!=0 && visit.longitude!=0 && visit.latitude!=null && visit.longitude!=null){
            if(visit.withSale){
              this.visited.push(visit);
              this.allVisitedWithSale.push(visit);
            }else{
              this.visitedWithoutSales.push(visit);
              this.allVisitedWithoutSales.push(visit);
            }
          }else{
            if(visit.withSale){
              this.allVisitedWithSale.push(visit);
            }else{
              this.allVisitedWithoutSales.push(visit);
            }
            
          }
          
        }
        this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    });
  }
  closeModal(){
    this.matDialogRef.close();
  }

  getCurrentDate(dateEnter?:Date){
    let date = new Date();
    if(dateEnter!=null){
      date = dateEnter;
    }
  
    let month = (date.getMonth()+1);
    let monthStr = month.toString();
    if(month<10){
      monthStr="0"+monthStr;
    }
    let day = date.getDate();
    let dayStr = day.toString();
    if(day<10){
      dayStr="0"+dayStr;
    }
    return `${date.getFullYear()}-${monthStr}-${dayStr}`;
  }

  getReportVisits(){
    this.isLoading=true;
    this.roviandaApi.getVisitsReport(this.data.sellerId,this.currentDate).subscribe((blob)=>{
      this.downloadFile(blob,this.currentDate);
      this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    });
  }
  downloadFile(data: any, date: string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    // Debe haber una manera mejor de hacer esto...
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `ReporteVisitasDelDia${date}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }
}
