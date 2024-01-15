import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // one way data binding data connect between any on side component to view or view to component
  firstname = "Mohamed"; 
  lastname = "sherif";
  
  // property binding
  title = "Learn Angular"
  
  // 2way binding > import forms module for 2 way binding in app module imports
  name="Mohamed sherif";
  
  // string interpollation 
  welcome = "hello world";

  
  getTitle(){
    return this.title
  }

  getHigh(first:number, sec:number){
    return Math.max (first, sec)
  }

  // string interpulation is also used to apply for css property eg: is this Line
  colour = "orange"

  // property bindings
  position = "senior developers"
  // button disabled
  isDisabled = true;

  //click count  
  clickCount = 0;
  clickMe(){
    this.clickCount++;
  }

  count=0;
  count1 = 0;
  clicks(){
    this.count++
  }

  // event handling 

  inputValue:string  = "";
  
  handleInput(event:any){
    this.inputValue = event.target.value
  }

 



 




}
