import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router:Router ) { }
signIn(){
  this.router.navigate(['/register'])
}

dashBoard(){
  this.router.navigate(['/dashboard'])
}

forgotPassword(){
  this.router.navigate(['/forgotpassword'])
}

  ngOnInit() {}

}
