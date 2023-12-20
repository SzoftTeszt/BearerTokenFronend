import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url="https://localhost:5001/api/Authentication/"
  constructor(private http:HttpClient) { }
  
  registration(body:any){
    console.log("body: ",body)
    return this.http.post("https://localhost:5001/api/Authentication/registeration", body)
  }
  
  login(body:any){
    return this.http.post('https://localhost:5001/api/Authentication/login', body, {responseType:'text'})
  }
}
