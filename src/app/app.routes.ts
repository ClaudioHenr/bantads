import { Routes } from '@angular/router';
import { TelaInicialComponent } from './Cliente/tela-inicial/tela-inicial.component';
import { TelaInicialGerenteComponent } from './gerente/tela-inicial-gerente/tela-inicial-gerente.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';
import { LoginComponent } from './autenticacao/login/login.component';

export const routes: Routes = [
    {
        path: "telainicial",
        component: TelaInicialComponent,
    },
    {
        path: "autocadastro",
        component: AutocadastroComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: 'telainicialgerente',
        component: TelaInicialGerenteComponent
    },
    {
        path: '',
        component: TelaInicialComponent    
    }

    ];
