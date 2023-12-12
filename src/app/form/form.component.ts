import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // forms

  carName="";// ng model 
  cars:string[] = []; // create an array to push the value when the submit button clicks
  
  addCars(){ // this function is used to get the car name from user and push the value to array of cars
    this.cars.push(this.carName);
    this.carName=""
    console.log("car name = ", this.cars)
  }

  // ex 2
  // get full name 
  fullname=""
  nameList:string[]=[]
  getName(){
    this.nameList.push(this.fullname);
    console.log("name list =", this.nameList);
    this.fullname=""
  }

}
