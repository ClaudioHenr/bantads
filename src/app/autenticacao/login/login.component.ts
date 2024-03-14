import { Component, ViewChild, viewChild } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm!: NgForm

  constructor(private loginService: LoginService, private route: Router) { }

  submitLogin() {
    console.log(this.loginForm.value)
    this.loginService.sendDataToLogin(this.loginForm.value.email, this.loginForm.value.password)
  }

}
