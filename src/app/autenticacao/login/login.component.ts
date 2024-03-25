import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, RouterLink } from '@angular/router';
import { autenticacao } from '../../shared/models/autenticacao.model';

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

  auth: autenticacao = new autenticacao()

  constructor(private loginService: LoginService, private route: Router) { }

  submitLogin() {
    //this.loginService.sendDataToLogin(this.auth)
    if (this.auth.login == "ADMIN" && this.auth.senha == "ADMIN") {
      this.route.navigate(['telainicialadmin'])
    } else if (this.auth.login == "GERENTE" && this.auth.senha == "GERENTE") {
      this.route.navigate(['telainicialgerente'])
    } else if (this.auth.login == "CLIENTE" && this.auth.senha == "CLIENTE") {
      this.route.navigate(['telainicial'])
    }
    //this.route.navigate(['/'])
  }

}
