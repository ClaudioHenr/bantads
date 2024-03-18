import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, RouterLink } from '@angular/router';
//comentado
//import { autenticacao } from '../../shared/models/autenticacao.model';

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

  //comentado
  //auth: autenticacao = new autenticacao()

  constructor(private loginService: LoginService, private route: Router) { }

  submitLogin() {
    //comentado
    //this.loginService.sendDataToLogin(this.auth)

    this.route.navigate(['/'])
  }

}
