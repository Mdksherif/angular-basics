import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor() { }
  signUpUsers:any []=[];
  signupObj: any ={
    userName:'',
    email:'',
    password:''
  }
  loginObj: any = {
    email:'', 
    password:''
  }


  ngOnInit(): void {
    const localStorageData = localStorage.getItem('signUpUsers') 
    if(localStorageData != null){
      this.signUpUsers = JSON.parse(localStorageData)
    }

  }

  onsignUp(){
    this.signUpUsers.push(this.signupObj)
    console.log("signup user array", this.signUpUsers);
    // To store the data as local storage
    localStorage.setItem('signUpUsers',JSON.stringify(this.signUpUsers));
    this.signupObj = {
      userName:'',
      email:'',
      password:''
    }

  }

  onLogin(){
    const isExistingUser = this.signUpUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password)
    if(isExistingUser !=undefined){
      alert("user login success")
    } else {
      alert("Email or Password are not Matched")
    }
  }
}
