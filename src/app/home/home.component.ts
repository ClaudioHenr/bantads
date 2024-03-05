import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { LoginComponent } from '../autenticacao/login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
