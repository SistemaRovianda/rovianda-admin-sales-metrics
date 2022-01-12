import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/Models/Client';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ListClientsSellerComponent } from '../list-clients-seller/list-clients-seller.component';

@Component({
  selector: 'app-list-all-clients',
  templateUrl: './list-all-clients.component.html',
  styleUrls: ['./list-all-clients.component.scss']
})
export class ListAllClientsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{selected:string[],type:string,items:{name:string,id:string,isSelected:boolean,key:string}[]},
  private roviandaApi:RoviandaApiService,private matDialogRef:MatDialogRef<ListClientsSellerComponent>) { }
  //clients:Client[]=[];
  isLoading:boolean=false;
  clientsList:{name:string,id:string,isSelected:boolean,key:string}[]=[];
  clientsListTemp:{name:string,id:string,isSelected:boolean,key:string}[]=[];
  form:FormGroup;
  isFiltered:boolean=false;
  isSelectedAll:boolean=false;
  typeFilter:string="";
  ngOnInit(): void {
    this.form=new FormGroup({
      hint: new FormControl(null,Validators.required)
    });
    if(this.data.type=="clients"){
      this.typeFilter="Clientes";
    this.isLoading=true;
    this.roviandaApi.getAllClients().subscribe((clients)=>{
      this.clientsList=clients.map(x=>({name:x.name,id:x.id.toString(),isSelected:false,key: x.keyClient.toString()}));
      if(this.clientsList.length==this.data.selected.length){
        this.isSelectedAll=true;
      }
      for(let client of this.clientsList){
          if(this.data.selected.includes(client.id)){
            client.isSelected=true;
          }
      }
      this.clientsListTemp=this.clientsList;
      this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    })
  }else if(this.data.type=="sellers"){
    this.typeFilter="Vendedores";
    this.clientsList=this.data.items;
    this.clientsListTemp=this.data.items;
    if(this.clientsList.length==this.data.selected.length){
      this.isSelectedAll=true;
    }
    for(let client of this.clientsList){
        if(this.data.selected.includes(client.id)){
          client.isSelected=true;
        }
    }
  }else if(this.data.type=="products"){
    this.typeFilter="Productos";
    this.isLoading=true;
    this.roviandaApi.getAllProducts().subscribe((clients)=>{
      this.clientsList=clients.map(x=>({name:x.name+" "+x.typePresentation ,id:x.id.toString(),isSelected:false,key: x.keySae}));
      if(this.clientsList.length==this.data.selected.length){
        this.isSelectedAll=true;
      }
      for(let client of this.clientsList){
          if(this.data.selected.includes(client.id)){
            client.isSelected=true;
          }
      }
      this.clientsListTemp=this.clientsList;
      this.isLoading=false;
    },(err)=>{
      this.isLoading=false;
    })
  }
  }

  search(){
    if(this.form.valid){
        this.isFiltered=true;
        let value=this.form.get("hint").value;
        this.clientsListTemp=this.clientsList.filter(x=>x.name.toLowerCase().includes(value.toLowerCase()) || x.key.toString().includes(value));
    }
  }
  cancelSearch(){
    this.isFiltered=false;
    this.clientsListTemp=this.clientsList;
  }

  select(index:number){
    this.clientsListTemp[index].isSelected=true;
    let id = this.clientsListTemp[index].id;
    for(let client of this.clientsList){
      if(client.id==id){
        client.isSelected=true;
      }
    }
  }
  removeSelect(index:number){
    this.clientsListTemp[index].isSelected=false;
    let id = this.clientsListTemp[index].id;
    for(let client of this.clientsList){
      if(client.id==id){
        client.isSelected=false;
      }
    }
  }
  cancel(){
    this.matDialogRef.close([]);
  }

  accept(){
    this.matDialogRef.close({items:this.clientsList.length?this.clientsList.filter(x=>x.isSelected):[],all:this.isSelectedAll});
  }
  all(){
    this.clientsList=this.clientsList.map(x=>({...x,isSelected:true}))
    this.clientsListTemp=this.clientsListTemp.map(x=>({...x,isSelected:true}))
    this.isSelectedAll=true;
  }
  deselectAll(){
    this.clientsList=this.clientsList.map(x=>({...x,isSelected:false}))
    this.clientsListTemp=this.clientsListTemp.map(x=>({...x,isSelected:false}))
    this.isSelectedAll=false;
  }

}
