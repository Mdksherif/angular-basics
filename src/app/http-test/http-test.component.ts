import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import httpclient module 
// declare the constructor 

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {

  

  constructor(private http: HttpClient) { }

  userForm = new FormGroup({
    fullName: new FormControl('',[Validators.required, Validators.maxLength(25)]),
    userName: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(/^[a-zA-Z]+$/)]),
    email: new FormControl('',[Validators.email, Validators.required]),

    address: new FormGroup({
      street: new FormControl('',[Validators.required]),
      suite: new FormControl('',[Validators.required]),
      city: new FormControl('',[Validators.required]),
      pincode: new FormControl('',[Validators.required]), 
    }),

    geo: new FormGroup({
      lat: new FormControl(''),
      lon: new FormControl(''),
    }),
    phone: new FormControl('', [Validators.required]),
    website: new FormControl(''),

    company: new FormGroup({
      companyLocation: new FormControl('',[Validators.required]),
      catchPhrase: new FormControl('')
    })
  })


  userData: any[] = [];
  isUserTable: boolean = false


  ngOnInit(): void {
    // this.getUser();
  }

  onSubmit(){
    this.userForm.value;
    console.log("user form value ", this.userForm.value)
    this.addUser();
    this.userForm.reset();
  }

  // post the data to api 

  addUser() {
    return this.http
    .post('https://jsonplaceholder.typicode.com/users', {
      name: this.userForm.controls.fullName.value,
      username: this.userForm.controls.userName.value,
      email: this.userForm.controls.email.value,
      address:{
        street: this.userForm.controls.address.controls.street.value,
        suite: this.userForm.controls.address.controls.suite.value,
        city: this.userForm.controls.address.controls.city.value,
        zipcode: this.userForm.controls.address.controls.pincode.value,
        geo:{
          lat: this.userForm.controls.geo.controls.lat.value,
          lng: this.userForm.controls.geo.controls.lon.value,
        },
      },
      
      phone: this.userForm.controls.phone.value,
      website: this.userForm.controls.website.value,
      company:{
        name:this.userForm.controls.company.controls.companyLocation.value,
        catchPhrase: this.userForm.controls.company.controls.catchPhrase.value,
      },
    })
    .subscribe((res) => {
      console.log('form respose', res);
      this.userData.push(res);
      console.log("user data", this.userData)
    });
  }

  // get the user details  
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res)=>{
      console.log("user get method", res)
      this.userData= res as any[]
    }, (error) => {
      console.log('error', error);
    }
    )
  }

  showhidetable(){
    this.getUser()
    this.isUserTable= !this.isUserTable
  }


  //only validations below
 
  pincodeValid(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);

    // Allow only numeric characters
    if (!/^\d+$/.test(inputChar) || (event.target as HTMLInputElement).value.length== 6) {
      event.preventDefault();
    }
  }

  handleKeyPressNum(event: KeyboardEvent): void {
    const inputChar = String.fromCharCode(event.charCode);

    // Allow only numeric characters
    if (!/^\d+$/.test(inputChar)) {
      event.preventDefault();
    }
  }

}
