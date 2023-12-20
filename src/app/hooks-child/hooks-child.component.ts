import { Component, OnInit,Input,OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements OnInit, OnChanges,DoCheck, OnDestroy {

  constructor() { }

  @Input('InputKeyId') keyid:string="";

  @Input('Inputtext') Title:string="";

  @Input('InputContent') contentList:string[]=[];

  @Input('Inputvalue') valueList:string[] = [];

  // ngDestroy
  

  
 
  contentListCount = 0
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges called current value", changes['Title'].currentValue);
    console.log("on changes called ", changes['keyid']);
    console.log("on changes called ", changes['Title'])
    // console.log("ngOnChanges called first change value", changes['Title'].firstChange);
    // console.log("ngOnChanges called first change", changes['Title'].isFirstChange);
    // console.log("ngOnChanges called previous value", changes['Title'].previousValue);
    // this console is not working because contentList is not a string is an array...
    // console.log("ngOnChanges called for content as currentvalue", changes['contentList'].currentValue)
    // if(!changes['Title'].firstChange){
    //   console.log("not a first change")
    // }
    // if(changes['Title'].currentValue === "hello"){
    //   console.log("current value is hello")
    // }
    
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
    this.Title = "hello im Title from ngOninit";
    // if the variable is an array push the value like below 
    this.contentList.push('ngOnInit Array pushed in contentList');
    this.contentListCount= 1;
  }
  ngDoCheck(): void {
 
    if(this.contentList.length > this.contentListCount){
      console.log("ng do check called")
      console.log("new content added")
      this.contentListCount++;
      console.log("incremented count list ", this.contentListCount)
    }
  }

  ngOnDestroy(): void {
    console.log("ng on destroy called")
  }
}
