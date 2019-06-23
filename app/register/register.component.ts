import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'; //Added this
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private register: RegisterService) {

   }

  submitRegister(email,password,first_name,last_name,phone){
    let result = {
      email:email,
      password:password,
      first_name: first_name,
      last_name: last_name,
      phone:phone,
    }

    this.register.createRegister(result).subscribe(registerData => {
      console.log(registerData)
      this.router.navigate(['/home']) //Routes to home page after filling out form and clicking Submit
    })
  }
  
  ngOnInit() {
  }

}
