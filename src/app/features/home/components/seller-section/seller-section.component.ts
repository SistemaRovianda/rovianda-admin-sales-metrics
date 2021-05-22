import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/User.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ListClientsSellerComponent } from '../list-clients-seller/list-clients-seller.component';

@Component({
  selector: 'app-seller-section',
  templateUrl: './seller-section.component.html',
  styleUrls: ['./seller-section.component.scss']
})
export class SellerSectionComponent implements OnInit {

  isLoading:Boolean=false;
  constructor(private roviandaApiService:RoviandaApiService,private dialog:MatDialog ) { }
  dateStart:any;
  dateEnd:any;
  form:FormGroup;
  filtered:boolean=false;
  ngOnInit(): void {
    this.form = new FormGroup({
      hint: new FormControl(null,Validators.required)
    });
    this.isLoading=true;
    let date= new Date();
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();
    if(+month<10){
      month="0"+month;
    }
    if(+day<10){
      day="0"+day;
    }
    let dateStr=`${date.getFullYear()}-${month}-${day}`;
    this.roviandaApiService.getAllSellers().subscribe(sellers=>{
      
      this.sellers = sellers.map(seller=>{
        return {
          cve: seller.cve,
          name: seller.name,
          uid: seller.id,
          amountAcumulated:"0",
          weightAcumulated:0,
          dateEnd:dateStr,
          dateStart:dateStr
        };
      });
      this.sellersTemp=this.sellers;
      this.isLoading=false;
    },
    (err)=>{
      this.sellers=[];
      this.isLoading=true;
    }); 
  }


  sellers:User[]=[];
  sellersTemp:User[]=[];
  select(index:number){
    this.sellers[index].isLoading=true;
    let toLoad=true;
    if(this.sellers[index].weightAcumulated!=0 && this.sellers[index].amountAcumulated!="0"){
      toLoad=false;
      this.sellers[index].isLoading=false;
    }
    if(toLoad){
    let date= new Date();
    let month = (date.getMonth()+1).toString();
    let day = date.getDate().toString();
    if(+month<10){
      month="0"+month;
    }
    if(+day<10){
      day="0"+day;
    }
    this.roviandaApiService.loadAcumulatedBySeller(this.sellers[index].uid,`${date.getFullYear()}-${month}-${day}`).subscribe((acumulated)=>{
      this.sellers[index].isLoading=false;
      this.sellers[index].amountAcumulated=acumulated.totalSolded;
      this.sellers[index].weightAcumulated=acumulated.totalWeight;
    },(err)=>{
      this.sellers[index].isLoading=false;
    });
  }
  }

  downloadReport(index:number){
    let dateStart = this.parseDate(this.sellers[index].dateStart);
    let dateEnd = this.parseDate(this.sellers[index].dateEnd);
  

    console.log("Fecha inicio: ",dateStart);
    console.log("Fecha final: ",dateEnd);
  }

  parseDate(dateToP:any){
    let date = new Date(dateToP);
    let month=(date.getMonth()+1).toString();
    let day= date.getDate().toString();
    if(+month<10) month="0"+month;
    if(+day<10) day="0"+day;
    return `${date.getFullYear()}-${month}-${day}`;
  }

  showClientsBySeller(index:number){
    const dialog = this.dialog.open(ListClientsSellerComponent,{
      disableClose:true,
      data:{
        sellerId: this.sellers[index].uid,
        sellerName: this.sellers[index].name
      }
    });
    dialog.afterClosed().subscribe(()=>{
      console.log("se cerro el modal");
    })
  }
  
  search(){
    if(this.form.valid){
      let hint = this.form.get("hint");
        if(this.filtered){
          this.sellers=this.sellersTemp;
        }
        this.sellers=this.sellers.filter(x=>(x.name.toUpperCase().includes(hint.value.toUpperCase())));
        this.filtered=true;
    }
}

cancelSearch(){
  this.sellers =this.sellersTemp;
  this.filtered=false;
  this.hint.reset();
}


  get hint(){
    return this.form.get("hint");
  }
}
