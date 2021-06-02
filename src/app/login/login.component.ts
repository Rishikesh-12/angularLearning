import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  user!:string;
  pass!:string;
  ngOnInit(): void {
  }
  login(){
    if(this.user==="admin" && this.pass==="password")
    {
      this.authService.login();
      this.router.navigate(['/reactive'])
    }
  }
}