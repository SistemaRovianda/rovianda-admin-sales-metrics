import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  sections:{section:number,name:string}[]=[
    {
      section:1,
      name: "Entradas"
    },
    {
      section:2,
      name: "Proceso"
    },
    {
      section:3,
      name: "Hornos"
    },
    {
      section:4,
      name: "Almacén Planta"
    },
    {
      section:5,
      name: "Salidas"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
