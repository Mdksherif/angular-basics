import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  

  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]),
    age: new FormControl('',[
      Validators.pattern(/^\d{1,2}$/), // Allows only digits and restricts to 2 digits
      Validators.required,
    ]),
    gender: new FormControl('',[Validators.required]),
    // qualification: new FormControl({'B.tech',disabled:true}),
    qualification: new FormControl({ value: 'B.tech', disabled: true }),

    isMarried: new FormControl(),
    profession: new FormControl(),
    experience: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    address: new FormGroup({
      city: new FormControl('',[Validators.required]),
      state: new FormControl(),
      pincode: new FormControl('',[Validators.required]), 
    }),
  })



  handleKeyPressNum(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);

    // Allow only numeric characters
    if (!/^\d+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  handleKeyPressAlp(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
  
    // Allow only alphabet characters
    if (!/^[a-zA-Z]+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  handleKeyPressAlp10(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);
  
    // Allow only alphabet characters and limit the input to 10 characters
    if (!/^[a-zA-Z]+$/.test(inputChar) || (event.target as HTMLInputElement).value.length >= 10) {
      event.preventDefault();
    }
  }

  pincodeValid(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);

    // Allow only numeric characters
    if (!/^\d+$/.test(inputChar) || (event.target as HTMLInputElement).value.length== 6) {
      event.preventDefault();
    }
  }

  
  getCountryName(countryCode: any) {
    switch (countryCode) {
      case '1': return 'India';
      case '2': return 'USA';
      case '3': return 'UK';
      case '4': return 'UAE';
      case '5': return 'Australia';
      case '6': return 'China';
      case '7': return 'Denmark';
      default: return '';
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

  contactFormData:any

  onSubmit(){
     this.contactFormData = this.contactForm.value;
    console.log("reactive forms =>", this.contactFormData)
    // console.log("Reactive Forms => ", this.contactForm.value)
    this.contactForm.reset();
  }


  get experience(){
    return this.contactForm.get('experience')
  }

  


}


