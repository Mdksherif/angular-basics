import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  contactForm = new FormGroup({
    firstName: new FormControl('Mohamed'),
    lastName: new FormControl('sherif'),
    age: new FormControl(),
    gender: new FormControl(),
    qualification: new FormControl({
      value:'B.tech',
      disabled:true
    }),
    isMarried: new FormControl(),
    profession: new FormControl(),
    experience: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(), 
    }),
  })
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("Reactive Forms => ", this.contactForm.value)
  }



}
