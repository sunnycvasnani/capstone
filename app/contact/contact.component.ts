import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { ContactService } from '../contact.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private contact:ContactService) { 

  }

  submitContact(first_name,last_name,email,phone,feedback){
    let result = {
      first_name: first_name,
      last_name: last_name,
      email:email,
      phone:phone,
      feedback:feedback,
    }

    this.contact.createContact(result).subscribe(contactData => {
      console.log(contactData)
      this.router.navigate(['/home'])  //Routes to home page after filling out form and clicking Submit
  })
}

  ngOnInit() {
  }

}
