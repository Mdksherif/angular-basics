import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-local-login',
  templateUrl: './local-login.component.html',
  styleUrls: ['./local-login.component.css']
})
export class LocalLoginComponent implements OnInit {

  constructor(private router: Router) {
    this.signUpUsers.push(this.adminSignup);
    console.log("user list",this.signUpUsers)
   }
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


  // to set default user for signupusers array 
   adminSignup: any = {
    userName: 'admin',
    email: 'admin@tvse.com',
    password: '123456'
  };

  // show & hide password 
  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
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
      this.router.navigate(['/']);
    } else {
      alert("Email or Password are not Matched")
    }
  }



  

}
