import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client, ClientUpdateRequest, DayVisited } from 'src/app/Models/Client';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{client:Client,sellerId:string,register:boolean},private dialog:MatDialogRef<ClientDetailsComponent>,
  private roviandaApiService:RoviandaApiService) { }
  form:FormGroup;
  isEditing:boolean=false;
  isLoading:boolean=false;
  edited:boolean=false;
  daysVisit:DayVisited={daysVisitedId:0,friday:false,monday:false,saturday:false,sunday:false,thursday:false,tuesday:false,wednesday:false};
  dayVisitOrinal:DayVisited ={daysVisitedId:0,friday:false,monday:false,saturday:false,sunday:false,thursday:false,tuesday:false,wednesday:false};
  ngOnInit(): void {
    
    this.form= new FormGroup({
      keyClient: new FormControl({value:null,disabled:true},Validators.required),
      name: new FormControl({value:null,disabled:true},Validators.required),
      typeClient: new FormControl({value:null,disabled:true},Validators.required),
      street: new FormControl({value:null,disabled:true},Validators.required),
      suburb: new FormControl({value:null,disabled:true},Validators.required),
      cp: new FormControl({value:null,disabled:true},Validators.required),
      state: new FormControl({value:null,disabled:true},Validators.required),
      keySaeNew: new FormControl({value:null,disabled:true},Validators.required),
      city: new FormControl({value:null,disabled:true},Validators.required)
    });
    console.log("Register: "+this.data.register);
    if(!this.data.register){
      this.setValuesINit();
      this.roviandaApiService.getDaysVisit(this.data.client.id).subscribe((dayVisit:DayVisited)=>{
        this.daysVisit={...dayVisit};
        this.dayVisitOrinal = dayVisit;
      },(err)=>{
        this.daysVisit={daysVisitedId:0,friday:false,monday:false,saturday:false,sunday:false,thursday:false,tuesday:false,wednesday:false};
      })
    }else{
      this.roviandaApiService.getLastCountClientRegister().subscribe(count=>{
        this.keyClient.setValue(count.count+1);
      });
      this.editCheck({source:null,checked:true});
      
    }
  }

  setValuesINit(){
    this.keyClient.setValue(this.data.client.keyClient);
    this.name.setValue(this.data.client.name);
    this.typeClient.setValue(this.data.client.typeClient);
    this.street.setValue(this.data.client.address.street);
    this.suburb.setValue(this.data.client.address.suburb);
    this.cp.setValue(this.data.client.address.cp);
    this.state.setValue(this.data.client.address.state);
    this.keySaeNew.setValue(this.data.client.keySaeNew,);
    this.city.setValue(this.data.client.address.location);
    if(this.dayVisitOrinal!=null){
      this.daysVisit=this.dayVisitOrinal;
    }
  }

  close(){
    this.dialog.close();
  }

  get keyClient(){
    return this.form.get("keyClient");
  }

  get name(){
    return this.form.get("name");
  }

  get typeClient(){
    return this.form.get("typeClient");
  }

  get street(){
    return this.form.get("street");
  }

  get suburb(){
    return this.form.get("suburb");
  }

  get cp(){
    return this.form.get("cp");
  }

  get state(){
    return this.form.get("state");
  }


  get city(){
    return this.form.get("city");
  }

  get keySaeNew(){
    return this.form.get("keySaeNew");
  }

  editCheck(event:MatCheckboxChange){
    console.log("Is Editing: "+event.checked);
    if(event.checked){
      this.isEditing=true;
        this.name.enable();
        this.street.enable();
        this.suburb.enable();
        this.cp.enable();
        this.state.enable();
        this.city.enable();
        
        if(this.data.client==null || this.data.client.typeClient=="CONTADO"){
          this.keySaeNew.enable();
        }
    }else{
      this.isEditing=false;
      if(!this.edited){
      this.setValuesINit();
      }
      this.name.disable();
        this.street.disable();
        this.suburb.disable();
        this.cp.disable();
        this.state.disable();
        this.city.disable();
        this.keySaeNew.disable();  
    }
  }


  updateClient(){
    if(this.form.valid){
    this.isLoading=true;
        let request:ClientUpdateRequest= {
          
          name: this.name.value,
          city: this.city.value,
          cp: this.cp.value,
          keySaeNew: this.keySaeNew.value,
          state: this.state.value,
          street: this.street.value,
          suburb: this.suburb.value,
          daysVisited: {
            id: this.dayVisitOrinal.daysVisitedId,
            monday: this.daysVisit.monday,
            tuesday: this.daysVisit.tuesday,
            wednesday: this.daysVisit.wednesday,
            thursday: this.daysVisit.thursday,
            friday: this.daysVisit.friday,
            saturday: this.daysVisit.saturday,
            sunday: this.daysVisit.sunday
          }
        };
        this.isLoading=true;
        this.name.disable();
        this.street.disable();
        this.suburb.disable();
        this.cp.disable();
        this.state.disable();
        this.city.disable();
        this.keySaeNew.disable();  
      this.roviandaApiService.updateClient(this.data.client.id,request).subscribe(()=>{
        this.isLoading=false;
        this.isEditing=false;
        this.edited=true;
      },(err)=>{
        this.isLoading=false;
      });
    }
  }

  register(){
    if(this.form.valid){
      
      let request:ClientUpdateRequest= {
        keyClientId: this.keyClient.value,
        name: this.name.value,
        city: this.city.value,
        cp: this.cp.value,
        keySaeNew: this.keySaeNew.value,
        state: this.state.value,
        street: this.street.value,
        suburb: this.suburb.value,
        daysVisited: {
          id: this.dayVisitOrinal.daysVisitedId,
          monday: this.daysVisit.monday,
          tuesday: this.daysVisit.tuesday,
          wednesday: this.daysVisit.wednesday,
          thursday: this.daysVisit.thursday,
          friday: this.daysVisit.friday,
          saturday: this.daysVisit.saturday,
          sunday: this.daysVisit.sunday
        }
      };
      this.isLoading=true;
      this.name.disable();
      this.street.disable();
      this.suburb.disable();
      this.cp.disable();
      this.state.disable();
      this.city.disable();
      this.keySaeNew.disable(); 
      this.roviandaApiService.registerClient(this.data.sellerId,request).subscribe(()=>{
        this.isLoading=false;
        this.close();
      },(err)=>{
        this.isLoading=false;
      });
    }
  }

  deleteClient(){
    this.isLoading=true;
    this.roviandaApiService.deleteLogicClient(this.data.client.id).subscribe(()=>{
      this.isLoading=false;
      this.close();
    },()=>{
      this.isLoading=false;
    });
  }
}

