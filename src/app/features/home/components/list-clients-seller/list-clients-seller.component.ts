import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/Models/Client';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ClientDetailsComponent } from '../client-details/client-details.component';

@Component({
  selector: 'app-list-clients-seller',
  templateUrl: './list-clients-seller.component.html',
  styleUrls: ['./list-clients-seller.component.scss']
})
export class ListClientsSellerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{sellerId:string,sellerName:string},private dialogRef:MatDialogRef<ListClientsSellerComponent>,private dialog:MatDialog ,private roviandaApiService:RoviandaApiService) { }
  isLoading:boolean =false;
  clients:Client[]=[];
  clientsTemp:Client[]=[];
  filtered:boolean=false;
  form:FormGroup;
  ngOnInit(): void {
    this.form= new FormGroup({
      hint: new FormControl(null,Validators.required)
    });
    this.isLoading=true;
   this.loadClient();
  }

  loadClient(){
    this.roviandaApiService.getClientOfSeller(this.data.sellerId).subscribe((clients)=>{
      this.clients = clients;
      this.clientsTemp=clients;
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
    });
  }

  search(){
      if(this.form.valid){
        let hint = this.form.get("hint");
          if(this.filtered){
            this.clients=this.clientsTemp;
          }
          this.clients=this.clients.filter(x=>(x.name.toUpperCase().includes(hint.value.toUpperCase())||x.keyClient.toString().includes(hint.value)));
          this.filtered=true;
      }
  }
  cancelSearch(){
    this.clients =this.clientsTemp;
    this.filtered=false;
    this.hint.reset();
  }

  close(){
    this.dialogRef.close();
  }

  register(){
    
    const modal = this.dialog.open(ClientDetailsComponent,{
      data: {
        client:null,
        register:true,
        sellerId: this.data.sellerId
      },
      disableClose:true
    });
    modal.afterClosed().subscribe(()=>{
        console.log("Se cerror el modal de registro de clientes");
        this.loadClient();
    });
  }

  details(index){
    console.log(index,this.clients[index]);
    const modal = this.dialog.open(ClientDetailsComponent,{
      data: {
        client:this.clients[index],
        register:false,
        sellerId: this.data.sellerId
      },
      disableClose:true
    });
    modal.afterClosed().subscribe(()=>{
      this.loadClient();
    })
  }


  get hint(){
    return this.form.get("hint");
  }
}
