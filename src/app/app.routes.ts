import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutocadastroComponent } from './autenticacao/autocadastro/autocadastro.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "autocadastro",
        component: AutocadastroComponent
    }
];
