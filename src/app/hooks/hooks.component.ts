import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ngonchnages & ng on init
  Title:string = "hello";
  keyid:string = "123456789";

  // ngdocheck 
  content="";
  contentList: string[]=[];

  getContent(){
    this.contentList.push(this.content);
    console.log("content pushed successfully")
    this.content="";
    console.log("content array = >", this.contentList)
    // im creating the array for store the content list 
  }
  

  //ngif
  value ="";
  valueList:string[]=[];
  getValue(){
    this.valueList.push(this.value);
    this.value=""
    console.log("value pushed => ", this.valueList)
    console.log("value length", this.valueList.length)
  }

    // ngDestroy
   
    disableHooksChild = false;
    








}
