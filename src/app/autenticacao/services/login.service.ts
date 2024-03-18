import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//comentado
//import { autenticacao } from '../../shared/models/autenticacao.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endpointUrl = 'http://localhost:3000/login'

  // Dados de Usuário p/ autenticação: Cliente ou Gerente, Tipo (cliente/gerente/admin), login, senha

  constructor(private http: HttpClient) { }

  //comentado
  /*async sendDataToLogin(auth: autenticacao) {
    const data = {
      email: auth.login, 
      senha: auth.senha
    }
    console.log("Contatando API...")
    this.http.post(this.endpointUrl, data).subscribe(
      (response) => console.log("Resposta de login recebida", response)
    )
  }*/

}
