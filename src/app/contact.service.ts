import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }


  createContact(contact){
    return this.http.post('https://sunny-capstone.herokuapp.com/contactform',contact)
  }
}
