import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Added this

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { } //Added private http...


  createLogin(login){ //Added this
    return this.http.post('https://sunny-capstone.herokuapp.com/loginform',login)

  }
}
