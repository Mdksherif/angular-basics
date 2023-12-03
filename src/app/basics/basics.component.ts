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

  colour = "orange"



}
