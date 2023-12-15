import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('Inputtext') Title:string="";
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called current value", changes['Title'].currentValue);
    console.log("ngOnChanges called first change value", changes['Title'].firstChange);
    console.log("ngOnChanges called first change", changes['Title'].isFirstChange);
    console.log("ngOnChanges called previous value", changes['Title'].previousValue);
    if(!changes['Title'].firstChange){
      console.log("not a first change")
    }
    if(changes['Title'].currentValue === "hello"){
      console.log("current value is hello")
    }
    
  }
}
