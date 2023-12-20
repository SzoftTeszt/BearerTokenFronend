import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent {
  regOszlop=["username","firstName","lastName","email","password"]
  
  registrationModel:any={
    "username": "",
    "firstName": "",
    "lastName": "",
    "email": "",
    "password": ""
  }

  logOszlop=["username","password"]
  loginModel:any={
    "username": "",
    "password": ""
  }

  companyName=""
  companies:any=[]
  constructor(private auth:AuthService, private base:BaseService){
    this.base.getCopmanies().subscribe(
      (res)=>this.companies=res
    )
  }

  registration(){
    this.auth.registration(this.registrationModel).subscribe(
      {
        next:(res)=>console.log("Regisztráció:", res),
        error:(res)=>console.log("Regisztrációs hiba:", res),
      }
    )
  }

  login(){
    this.auth.login(this.loginModel).subscribe(
      {
        next:(res)=>{
          console.log("Login(Token):", res)
          localStorage.setItem("token",res)
          this.base.loadCompanies()
      },
        error:(res)=>console.log("Login hiba:", res),
      }
    )
  }

  logout(){
    if (localStorage.getItem("token"))
      localStorage.removeItem("token")
    // localStorage.clear()
  }

  addCompany(){
    // if (localStorage.getItem("token"))
    // {

    // }

    this.base.addCompany(this.companyName)
  }
}