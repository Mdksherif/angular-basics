import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-test',
  templateUrl: './reactive-forms-test.component.html',
  styleUrls: ['./reactive-forms-test.component.css']
})
export class ReactiveFormsTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderForm= new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    district : new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required])
  })

  orderFormData:any

  onSubmitOrderform(){
   this.orderFormData = this.orderForm.value; 
   console.log("Order Data =>", this.orderFormData)
   
   this.orderForm.reset();
  }

  alp20(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
    if (!/^[a-zA-Z]+$/.test(inputChar) || (event.target as HTMLInputElement).value.length >= 20) {
      event.preventDefault();
    }
  }

  pincodenum(event: KeyboardEvent): void{
    const inputNum = String.fromCharCode(event.charCode);
    if (!/^[0-9]+$/.test(inputNum) || (event.target as HTMLInputElement).value.length >= 6) {
      event.preventDefault();
    }

  }
}
