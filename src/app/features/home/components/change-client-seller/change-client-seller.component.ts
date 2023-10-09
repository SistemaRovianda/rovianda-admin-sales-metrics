import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { Client } from 'src/app/Models/Client';
import { User } from 'src/app/Models/User.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ConfirmChangeComponent } from '../confirm-change/confirm-change.component';

@Component({
  selector: 'app-change-client-seller',
  templateUrl: './change-client-seller.component.html',
  styleUrls: ['./change-client-seller.component.scss']
})
export class ChangeClientSellerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:{client:Client,currentSellerUid:string},private roviandaApiService:RoviandaApiService,private matDialog:MatDialog,private matDialogRef:MatDialogRef<ChangeClientSellerComponent>) { }
  sellers:{cve:string,name:string,uid:string}[]=[];
  form:FormGroup;
  get sellerUid(){
    return this.form.get("sellerUid");
  }
  isLoading:boolean=false;
  modified:boolean=false;
  ngOnInit(): void {
    this.form = new FormGroup({
      sellerUid: new FormControl(null,Validators.required)
    });
    this.roviandaApiService.getAllSellers().subscribe((sellers)=>{
      
      this.sellers= sellers.filter(x=>x.id!=this.data.currentSellerUid).map((x)=>({cve:x.cve,name:x.name,uid:x.id}))
    });
  }
  confirmChange(){
    if(this.form.valid){
      this.matDialog.open(ConfirmChangeComponent,{data:{msg:"¿Está seguro que desea cambiar a este vendedor?"}}).afterClosed().subscribe((result)=>{
        if(result){
          this.isLoading=true;
          this.roviandaApiService.customerReassign(this.data.client.id,this.sellerUid.value).subscribe(()=>{
              this.isLoading=false;
              this.modified=true;
          },err=>{});
        }
      });
    }
  }
close(){
  this.matDialogRef.close();
}
}
