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
  firstname=""
  lastname=""
  nameList:string[]=[]
  getName(form:any){
    this.nameList.push(this.firstname +' '+ this.lastname);
    console.log("name list =", this.nameList);
    form.resetForm();
  }

 // ex 3 
 // get address form as object type 
 locality: string = '';
 pincode: any;
 state: string = '';
 AddressformData: any;

submitAddressForm(form:any){
  this.AddressformData = {
    locality: this.locality,
    pincode: this.pincode,
    state: this.state
  }
  console.log("formData",this.AddressformData)
 
  form.resetForm();

}


orderid : string=""
productname : string=""
quantity: number= 1
orderformdata:any[] = [];
orderData: any

submitOrderForm(form: any){
  this.orderData = {
    orderid: this.orderid,
    productname: this.productname,
    quantity: this.quantity
  }
  this.orderformdata.push(this.orderData)
  console.log("order list ", this.orderformdata);
  form.resetForm();
}

}

