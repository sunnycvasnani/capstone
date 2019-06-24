import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router'; //Added this
import { LoginService } from '../login.service' //Added this

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private login:LoginService) { 
  }

  submitLogin(email,password){
    let result = {
      email:email,
      password:password,
    }

    this.login.createLogin(result).subscribe(loginData => {
      console.log(loginData)
      this.router.navigate(['/home'])
    })
  }

  btnClick= function () {
    this.router.navigateByUrl('/register');
  };

  ngOnInit() {
  }

}
