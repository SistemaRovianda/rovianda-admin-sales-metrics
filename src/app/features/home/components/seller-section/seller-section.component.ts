import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Models/User.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { FormatReportDialogComponent } from '../format-report-dialog/format-report-dialog.component';
import { ListAllClientsComponent } from '../list-all-clients/list-all-clients.component';
import { ListClientsSellerComponent } from '../list-clients-seller/list-clients-seller.component';

@Component({
  selector: 'app-seller-section',
  templateUrl: './seller-section.component.html',
  styleUrls: ['./seller-section.component.scss']
})
export class SellerSectionComponent implements OnInit {

  isLoading:Boolean=false;
  isDownloading:boolean=false;
  constructor(private roviandaApiService:RoviandaApiService,private dialog:MatDialog ) { }
 
  form:FormGroup;
  form2:FormGroup;
  filtered:boolean=false;
  form3:FormGroup;
  form4:FormGroup;
  ngOnInit(): void {
    this.form4=new FormGroup({
      rangeType: new FormControl({value:'day',disabled:true},Validators.required)
    });
    this.form2 = new FormGroup({
      from: new FormControl(null,Validators.required),
      to: new FormControl(null,Validators.required)
    });
    this.form3=new FormGroup({
      dateStart: new FormControl(null,Validators.required),
      dateEnd: new FormControl(null,Validators.required)
    });
    this.dateStart.valueChanges.subscribe((value)=>{
      this.validateRangeDates();
    })
    this.dateEnd.valueChanges.subscribe((value)=>{
      this.validateRangeDates();
    })
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
    let dateStart = "";
    let dateEnd = "";
    if(this.form2.valid){
      let date1 = new Date(this.from.value);
      let date2= new Date(this.to.value);
      dateStart = this.parseDate(date1);
      dateEnd = this.parseDate(date2);
    }else{
      let date= new Date();
      dateStart=this.parseDate(date);
      dateEnd = this.parseDate(date);
    }
    this.roviandaApiService.loadAcumulatedBySeller(this.sellers[index].uid,dateStart,dateEnd).subscribe((acumulated)=>{
      this.sellers[index].isLoading=false;
      this.sellers[index].amountAcumulated=acumulated.totalSolded;
      this.sellers[index].weightAcumulated=acumulated.totalWeight;
    },(err)=>{
      this.sellers[index].isLoading=false;
    });
  }

  downloadSummary(index:number){
    this.sellers[index].isLoading=true;
    let dateStart = "";
    let dateEnd = "";
    if(this.form2.valid){
     // this.isLoading=true;
      let date1 = new Date(this.from.value);
      let date2= new Date(this.to.value);
      dateStart = this.parseDate(date1);
      dateEnd = this.parseDate(date2);
    }else{
      let date= new Date();
      dateStart=this.parseDate(date);
      dateEnd = this.parseDate(date);
    }

    this.dialog.open(FormatReportDialogComponent,{
      data:{
        dateStart:dateStart,
        dateEnd:dateEnd,
        type: 3,
        presentationId: null,
        sellerName: this.sellers[index].name,
        sellerId: this.sellers[index].uid
      },
      disableClose:true
    });
    // this.roviandaApiService.downloadSummary(this.sellers[index].uid,dateStart,dateEnd,"xlsx").subscribe((response)=>{
    //   this.sellers[index].isLoading=false;
    //   this.downloadFile(response,this.sellers[index].name,dateStart,dateEnd);
    //   this.isLoading=false;
    // },(err)=>{
    //   this.sellers[index].isLoading=false;
    //   this.isLoading=false;
    // });
  }

 
  downloadFile(data: any,sellerName:string,dateStart:string,dateEnd:string){
    var url = window.URL.createObjectURL(new Blob([data]));
  
     // Debe haber una manera mejor de hacer esto...
     var a = document.createElement('a');
     document.body.appendChild(a);
     a.setAttribute('style', 'display: none');
     a.href = url;
     a.download = `Resumen${sellerName}-${dateStart}-${dateEnd}.xlsx`;
     a.click();
     window.URL.revokeObjectURL(url);
     a.remove(); // remove the element
   }

  downloadReport(){
    if(this.dateStart.valid && this.dateEnd.valid){
    this.isDownloading=true;
    let dateStart = this.parseDate(this.dateStart.value);
    let dateEnd = this.parseDate(this.dateEnd.value);
    this.roviandaApiService.getReportGeneral(dateStart,dateEnd,{
      type: this.rangeType.value,
      clientsIds: (this.allClients)?[]:this.clientsSelected.map(x=>+x.id),
      productsIds: (this.allProducts)?[]:this.productsSelected.map(x=>+x.id),
      sellersIds: (this.allSellers)?[]:this.sellersSelected.map(x=>x.id)
    }).subscribe((data)=>{
      let type="";
      switch(this.rangeType.value){
        case "day":
          type="por dia";
          break;
        case "week":
          type="por semana";
          break;
        case "month":
          type="por mes";
          break;
        case "year":
          type="por año";
          break;
        default:
          type="";
          break;
      }
      this.downloadFile(data,"General "+type,dateStart,dateEnd);
      this.isDownloading=false;
    },(err)=>{
      this.isDownloading=false;
    })
  }else{
    this.dateStart.setErrors({required:true});
    this.dateEnd.setErrors({required:true});
  }
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
  clientsSelected:{name:string,id:string,isSelected:boolean,key:number}[]=[];
  sellersSelected:{name:string,id:string,isSelected:boolean,key:number}[]=[];
  productsSelected:{name:string,id:string,isSelected:boolean,key:number}[]=[];
  allClients:boolean=false;
  allSellers:boolean=false;
  allProducts:boolean=false;
  openDialogSellers(){
    const dialog = this.dialog.open(ListAllClientsComponent,{
      disableClose:true,
      data:{
        selected: this.sellersSelected.map(x=>x.id),
        items:this.sellers.map((x,index)=>({name:x.name,id:x.uid,isSelected:false,key:index+1})),
        type: "sellers"
      }
    });
    dialog.afterClosed().subscribe((selected)=>{
      if(selected){
        console.log("Sellers: "+JSON.stringify(selected));
        this.sellersSelected=selected.items;
        this.allSellers=selected.all;
      }
    })
  }
  openDialogProducts(){
    const dialog = this.dialog.open(ListAllClientsComponent,{
      disableClose:true,
      data:{
        selected: this.productsSelected.map(x=>x.id),
        items:[],
        type: "products"
      }
    });
    dialog.afterClosed().subscribe((selected)=>{
      if(selected){
        this.productsSelected=selected.items;
        this.allProducts=selected.all;
      }
    })
  }
  openDialogClients(){
    const dialog = this.dialog.open(ListAllClientsComponent,{
      disableClose:true,
      data:{
        selected: this.clientsSelected.map(x=>x.id),
        items:[],
        type: "clients"
      }
    });
    dialog.afterClosed().subscribe((selected)=>{
      if(selected){
        this.clientsSelected=selected.items;
        this.allClients=selected.all;
      }
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

  get from(){
    return this.form2.get("from");
  }
  
  get to(){
    return this.form2.get("to");
  }

  get dateStart(){
    return this.form3.get("dateStart");
  }

  get dateEnd(){
    return this.form3.get("dateEnd");
  }

  get rangeType(){
    return this.form4.get("rangeType");
  }
  typeRange:string="";
  validateRangeDates(){
    if(this.form3.valid){
      let dateStart = new Date(this.dateStart.value);
      let dateEnd = new Date(this.dateEnd.value);
     if(dateStart.getTime()<=dateEnd.getTime()){
        let dayDifference = (dateEnd.getTime()-dateStart.getTime())/ (1000 * 3600 * 24);
        console.log("dayDiference: "+dayDifference);
        if(dayDifference>0 && dayDifference<7){
          this.rangeType.setValue("day");
        }else if(dayDifference>=7 && dayDifference<=30){
          this.rangeType.setValue("week");
          
        }else if(dayDifference>365){
          this.rangeType.setValue("year");
        }else if(dayDifference<365){
          this.rangeType.setValue("month");
        }
     }
    }
  }
  
}
