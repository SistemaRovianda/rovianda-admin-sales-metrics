import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SellerSelected, User } from 'src/app/Models/User.Model';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
import { ListAllClientsComponent } from '../../home/components/list-all-clients/list-all-clients.component';

@Component({
  selector: 'app-seller-reports',
  templateUrl: './seller-reports.component.html',
  styleUrls: ['./seller-reports.component.scss']
})
export class SellerReportsComponent implements OnInit {

  constructor(private dialog: MatDialog, private roviandaApiService: RoviandaApiService) { }
  form: FormGroup;
  get to() {
    return this.form.get("to");
  }
  isLoading: boolean = false;
  showAlert: boolean = false;
  selection: number = 1;
  day:string="MONDAY";
  month: number = 1;
  period: number = 1;
  newYear: number = 0;
  oldYear: number = 0;
  validYears: number[] = [];
  ngOnInit(): void {
    this.form = new FormGroup({
      to: new FormControl(new Date(), Validators.required)
    })
    let currentYear = new Date().getFullYear();
    this.newYear = currentYear;
    this.oldYear = currentYear;
    for (let implementYear = 2021; implementYear <= currentYear; implementYear++) {
      this.validYears.push(implementYear);
    }
    this.roviandaApiService.getAllSellers().subscribe(sellers => {

      this.sellers = sellers.map(seller => {
        return {
          cve: seller.cve,
          name: seller.name,
          uid: seller.id,
          amountAcumulated: "0",
          weightAcumulated: 0,
          dateEnd: null,
          dateStart: null
        };
      });
      this.sellersAll = this.sellers;
      this.isLoading = false;
    },
      (err) => {
        this.sellers = [];
        this.isLoading = true;
      });
  }

  sellersSelected: { name: string, id: string, isSelected: boolean, key: number }[] = [];
  allSellers: boolean = false;
  sellers: User[] = [];
  sellersAll: User[] = [];
  sellersTemp: SellerSelected[] = [];
  openDialogSellers() {
    this.showAlert = false;
    const dialog = this.dialog.open(ListAllClientsComponent, {
      disableClose: true,
      data: {
        selected: this.sellersSelected.map(x => x.id),
        items: this.sellers.map((x, index) => ({ name: x.name, id: x.uid, isSelected: false, key: index + 1 })),
        type: "sellers"
      }
    });
    dialog.afterClosed().subscribe((selected) => {
      if (selected) {
        console.log("Sellers: " + JSON.stringify(selected));
        this.allSellers = selected.all;
        if (!this.allSellers) {
          this.sellersSelected = selected.items;
        } else {
          this.sellersSelected = this.sellersAll.map((x, index) => ({
            id: x.uid,
            isSelected: true,
            key: index + 1,
            name: x.name
          }));
        }
      }
    })
  }

  downloadReportSchedule(){
    if(this.sellersSelected.length==0){
      this.showAlert=true;
    }else{

    }
  }

  downloadReportVisits() {

    if (this.sellersSelected.length == 0) {
      this.showAlert = true;
    } else {
      if(this.selection==1){
        let sellersSelected: string[] = this.sellersSelected.map(x => x.id);
        let dayStr="";
        switch(this.day){
          case "MONDAY":
              dayStr="Lunes"
              break;
          case "TUESDAY":
              dayStr="Martes"
              break;
          case "WEDNESDAY":
              dayStr="Miercoles"
              break;
          case "THURSDAY":
              dayStr="Jueves"
              break;
          case "FRIDAY":
              dayStr="Viernes"
              break;
          case "SATURDAY":
              dayStr="Sabado"
              break;
      }
        this.isLoading = true;
        this.roviandaApiService.downloadScheduleReport(sellersSelected, this.day).subscribe((blob) => {
          this.downloadFile(blob, dayStr,"Agenda");
          this.isLoading = false;
        }, err => {
          this.isLoading = false;
        });
      }else if (this.selection == 2) {
        let date = this.parseDate(this.to.value);
        console.log("DATE: " + date);
        let sellersSelected: string[] = this.sellersSelected.map(x => x.id);
        console.log("Sellers: " + sellersSelected);
        this.isLoading = true;
        this.roviandaApiService.downloadVisits(sellersSelected, date).subscribe((blob) => {
          this.downloadFile(blob, date,"Visitas");
          this.isLoading = false;
        }, err => {
          this.isLoading = false;
        });
      } else if(this.selection==3) {
        let sellersSelected: string[] = this.sellersSelected.map(x => x.id);
        console.log("Sellers: " + sellersSelected);
        this.isLoading = true;
        this.roviandaApiService.downloadIncreasing(sellersSelected, this.month,this.newYear,this.oldYear,this.period).subscribe((blob) => {
          this.downloadFile(blob,`${this.oldYear}-${this.newYear}`,"Crecimiento");
          this.isLoading = false;
        }, err => {
          this.isLoading = false;
        });
      }
    }
  }

  downloadFile(data: any, date: string,type:string) {
    var url = window.URL.createObjectURL(new Blob([data]));

    // Debe haber una manera mejor de hacer esto...
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    a.download = `Reporte${type}${date}.xlsx`;
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove(); // remove the element
  }
  parseDate(date: Date) {
    let month = date.getMonth().toString();
    if (+month < 10) {
      month = "0" + month;
    }
    let day = date.getDate().toString();
    if (+day < 10) {
      day = "0" + day;
    }
    return date.getFullYear() + "-" + month + "-" + day;
  }
}
