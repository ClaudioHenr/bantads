import { Routes } from '@angular/router';
import { TelaInicialComponent } from './Cliente/tela-inicial/tela-inicial.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';

export const routes: Routes = [
  {
    path: 'cliente',
    component: TelaInicialComponent,
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
