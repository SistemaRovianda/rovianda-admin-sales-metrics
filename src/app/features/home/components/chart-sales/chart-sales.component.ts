import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ChartD3DataInterface } from 'src/app/Models/Metrics';
import { RoviandaApiService } from 'src/app/providers/services/Rovianda.Api.Service';
@Component({
  selector: 'app-chart-sales',
  templateUrl: './chart-sales.component.html',
  styleUrls: ['./chart-sales.component.scss']
})
export class ChartSalesComponent implements OnInit {

  private DATA_COUNT = 0;
  private MAX_LABEL_LENGTH=10;
  private data2:ChartD3DataInterface[]= [];
  private svg;
  private margin = {top: 20, right: 10, bottom: 20, left: 40};
  private marginOverview = {top: 30, right: 10, bottom: 20, left: 40};
  private selectorHeight = 40;
   width = 1500 - this.margin.left - this.margin.right;
   height = 500 - this.margin.top - this.margin.bottom - this.selectorHeight;
  private heightOverview = 80 - this.marginOverview.top - this.marginOverview.bottom;
  private maxLength =0;
  private barWidth = 0;
  numBars =0; 
  private isScrollDisplayed:Boolean=false;
  title:string="VENTAS GENERALES";
  isLoading:boolean=false;
  constructor(private roviandaApi:RoviandaApiService) { }

  ngOnInit(): void {
    
    
  }
  public getDataChart(data: ChartD3DataInterface[]){
    
      
    this.resetSvg();
    
      this.data2=data;
      this.DATA_COUNT=this.data2.length;
      this.maxLength = d3.max(this.data2.map(x=>(x.name+" "+x.typePresentation).length));
      this.barWidth = this.maxLength*7;
      this.numBars=Math.round(this.width/this.barWidth);
      this.isScrollDisplayed=this.barWidth * this.data2.length > this.width;
      //   this.createSvg();
      /*for(let item of this.data2){
        console.log(item.name+" "+item.typePresentation +" "+item.amount);
      }*/
      this.drawBars(this.data2);
     
    
  
  }
  private resetSvg(): void {
    let d3Chart =d3.select(".chart");
    d3Chart.selectAll("*").remove();
    d3Chart.attr("width",null);
    d3Chart.attr("height",null);
}
diagram:any;
private drawBars(data: ChartD3DataInterface[]): void {
  let xscale = d3.scaleBand()
    .domain(data.slice(0,this.numBars).map(function (d) { return d.name+" "+d.typePresentation; }))
    .rangeRound([0, this.width]).padding(.2);
  //console.log("Valor mayor: "+d3.max(data,function (d) { return d.amount; }));
  let yscale = d3.scaleLinear()
    .domain([0, d3.max(data.map(x=>x.amount))])
    .range([this.height, 0]);

  let xAxis  = d3.axisBottom(xscale);
  let yAxis  = d3.axisLeft(yscale);
  let svg = d3.select(".chart")
    //.call(d3.zoom().scaleExtent([1,5]).on("zoom", function (event) {
    // if(event.transform.k==1){
    //   svg.attr("transform","translate(16,6) scale(1)")
    // }else{
    //   console.log("Ajustado");
    //   svg.attr("transform",event.transform);
    // }
    //}))
  .attr("width", this.width + this.margin.left + this.margin.right)
  .attr("height", this.height + this.margin.top + this.margin.bottom + this.selectorHeight);
  let displayed = d3.scaleQuantize()
  .domain([0, this.width])
  .range(d3.range(data.length));
   this.diagram = svg.append("g").attr("style","background-color: #91d8f2s")
       .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        this.diagram.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0, " + this.height + ")")
        .call(xAxis);
  
        this.diagram.append("g")
              .attr("class", "y axis")
              .call(yAxis);
  let bars = this.diagram.append("g");
  let div = d3.select("body").append("div")
                      .attr("style", `position: absolute;			
                      text-align: center;			
                      width: 250px;					
                      height: 100px;					
                      padding: 2px;				
                      font: 12px sans-serif;		
                      background: white;	
                      border: 0px;		
                      border-radius: 8px;			
                      pointer-events: none;
                      align-items: center`)				
                      .style("opacity", 0);
            bars.selectAll("rect")
            .data(data.slice(0, this.numBars), function (d:ChartD3DataInterface) {return d.name+" "+d.typePresentation; })
            .enter().append("rect").attr("style", "fill: #FAD985")
            .attr("x", function (d) { return xscale(d.name+" "+d.typePresentation); })
            .attr("y", function (d) { return yscale(d.amount); })
            .attr("width", xscale.bandwidth())
            
            .attr("height", (d)=>{ return this.height - yscale(d.amount); })
            .on("mouseover",(event,d)=>{
              //console.log(event);
              div.transition()		
                .duration(200)		
                .style("opacity", .9);		
             div.html(`<label style='font-size: 20px '>${d.name+" "+d.typePresentation}</label><br><label style='font-size: 20px'>Total: $ ${this.parseAmount(d.amount)}</label><br><label style='font-size: 20px'>Cantidad: ${this.parseAmount(d.quantity)} ${d.uniMed=='PZ'?'Piezas':'Kilos'}</label>`)	
                .style("left", (event.pageX) + "px")		
                .style("top", (event.pageY - 28) + "px");	
            }).on("mouseout", function(d) {		
              div.transition()		
                  .duration(500)		
                  .style("opacity", 0);	
          });

            if (this.isScrollDisplayed)
            {
              let xOverview = d3.scaleBand()
                              .domain(data.map(function (d) { return d.name+" "+d.typePresentation; }))
                              .range([0, this.width]).padding(.2);
              let yOverview = d3.scaleLinear().range([this.heightOverview, 0]);
              yOverview.domain(yscale.domain());
            
              let subBars = this.diagram.selectAll('.subBar')
                  .data(data);
            
              subBars.enter().append("rect")
                  .attr('style',"fill: gray;opacity: 0.5;")
                  .attr("height",(d) =>{
                          return this.heightOverview - yOverview(d.amount);
                      }).attr("width",(d)=> {
                          return xOverview.bandwidth()
                      }).attr("x", (d)=> {
                          return xOverview(d.name+" "+d.typePresentation);
                      }).attr("y", (d)=> {
                          return this.height + this.heightOverview + yOverview(d.amount)
                      });
              this.diagram.append("rect")
                          .attr("class","slicer")
                          .attr("transform", "translate(0, " + (this.height + this.margin.bottom) + ")")
                          .attr("style", "stroke: red;stroke-opacity: .1;fill: lightSteelBlue;fill-opacity: .5;")
                          .attr("x", 0)
                          .attr("y", 0)
                          .attr("height", this.selectorHeight)
                          .attr("width", Math.round(parseFloat((this.numBars * this.width).toString())/data.length))
                          .attr("pointer-events", "all")
                          .attr("cursor", "ew-resize")
                          .call(d3.drag().on("drag",(event)=>{
                          var x = parseInt(d3.select(".slicer").attr("x")),
                          nx = x + event.dx,
                          w = parseInt(d3.select(".slicer").attr("width")),
                          f, nf, new_data, rects;
                  
                      if ( nx < 0 || nx + w > this.width ) return;
                  
                      d3.select(".slicer").attr("x", nx);
                  
                      f = displayed(x);
                      nf = displayed(nx);
                  
                      if ( f === nf ) return;
                  
                      new_data = data.slice(nf, nf + this.numBars);
                  
                      xscale.domain(new_data.map(function (d) { return d.name+" "+d.typePresentation; }));
                      this.diagram.select(".x.axis").call(xAxis);
                  
                      rects = bars.selectAll("rect")
                        .data(new_data, function (d) {return d.name+" "+d.typePresentation; });
                  
                      rects.attr("x", function (d) { return xscale(d.name+" "+d.typePresentation); });

                      rects.enter().append("rect")
                        .attr("style", "fill: #FAD985;")
                        .attr("x", function (d) { return xscale(d.name+" "+d.typePresentation); })
                        .attr("y", function (d) { return yscale(d.amount); })
                        .attr("width", xscale.bandwidth())
                        .attr("height",  (d) =>{ 
                          return  this.height - yscale(d.amount); 
                        }).on("mouseover",(event,d)=>{
                          //console.log(event);
                          div.transition()		
                            .duration(200)		
                            .style("opacity", .9);		 
                         div	.html(`<label style='font-size: 20px '>${d.name+" "+d.typePresentation}</label><br><label style='font-size: 20px'>Total: $ ${this.parseAmount(d.amount)}</label><br><label style='font-size: 20px'>Cantidad: ${this.parseAmount(d.quantity)} ${d.uniMed=='PZ'?'Piezas':'Kilos'}</label>`)	
                            .style("left", (event.pageX) + "px")		
                            .style("top", (event.pageY - 28) + "px");	
                        }).on("mouseout", function(d) {  
                          div.transition() 
                              .duration(500) 
                              .style("opacity", 0); 
                      });
                      rects.exit().remove();
                    }));
            }        
      }
      parseAmount(number:number){
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
}