import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {
// Followed the country structure  
  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','USA'),
    new Country('3','UK'),
    new Country('4','Germany')
  ]

  onSubmit(forms:NgForm) {
    console.log("contact form data", forms.value);
  }

// followed for state structure


  stateList:State[]=[
    new State('1','Tamilnadu'),
    new State('2','kerala'),
    new State('3','karnataka'),
    new State('4','andhra'),
  ]


  
  onClick(detailForm:NgForm){
  console.log("details form data", detailForm.value)
  }

  addressdetail!: Details;



  //experiment one staff

  onsubmitstaff(staffform:NgForm){
    console.log("staff form checks => ", staffform.value)

  }

  staffDetails!:staffDetail




  constructor() { }

  ngOnInit(): void {
    
    this.addressdetail = {
      firstName:"tom",
      lastName: "cat",
      email: "tommy@abc.com",
      gender:"male", 
      isMarried: true,
      state:"2",
      addressDetails: {
        city:"chennai",
        street:"phase 12",
        pincode: "627412"
      }
    }

    this.staffDetails = {
      staffName:"farnas"
    }

  }


}

// new class created for country drop down structure 
class Country {
  id: string;
  name: string;

  constructor(id:string, name:string){
    this.id = id;
    this.name = name
  }
}


// new class is created for state drop down structure 

class State {
  id:string;
  statename: string;

  constructor(id:string, statename:string){
    this.id = id;
    this.statename = statename
  }
}

// To set the default structure of Details for address detail then add on ngOnInit 

//steps to fetch the default value
// first create a structure using class 
// 2nd set the detail structure to a var
// 3rd in ngOnInit ( assign the default value )

class Details {
  firstName !:string;
  lastName !:string;
  email !:string;
  gender !:string;
  isMarried !:boolean;
  state !:string
  addressDetails !: {
    city:string;
    street:string;
    pincode:string;
  }

}

// experiment staff details 
class staffDetail {
  staffName!: string
} // 


