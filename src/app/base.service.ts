import { HttpClient, HttpClientJsonpModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }
  url="https://localhost:5001/api/Companies"
  
  private conpanySub= new BehaviorSubject([])

  getCopmanies(){
    return this.conpanySub
  }

  addCompany(companyName:any){
    let body={name:companyName}
    let token=localStorage.getItem('token')
    let headers= new HttpHeaders().set('Authorization', 'Bearer '+token)

    this.http.post(this.url,body, {headers:headers}).subscribe(res=>this.loadCompanies())
  }

  loadCompanies(){
    if (localStorage.getItem("token"))
    {
      let token=localStorage.getItem('token')
      let headers= new HttpHeaders().set('Authorization', 'Bearer '+token)
      this.http.get(this.url, {headers:headers}).subscribe(
        (res:any)=>this.conpanySub.next(res)
      )
    }
  }

}
