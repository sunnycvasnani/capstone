import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' //Added thiss

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { } //Added private http...


  createRegister(register){ //Added this
    return this.http.post('https://sunny-capstone.herokuapp.com/registerform',register)
  }
}
