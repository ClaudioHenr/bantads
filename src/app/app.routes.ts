import { Routes } from '@angular/router';
import { TelaInicialComponent } from './components/Cliente/tela-inicial/tela-inicial.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';

export const routes: Routes = [
    {
        path: "telainicial",
        component: TelaInicialComponent,
    },
    {
        path: "autocadastro",
        component: AutocadastroComponent
    }
];
