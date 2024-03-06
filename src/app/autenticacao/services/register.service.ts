import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../shared/models/cliente.model';
import { Endereco } from '../../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private endpoint = ''

  constructor(private http: HttpClient ) { }

  sendDataForRegister(client: Cliente, address: Endereco) {
    this.http.post(this.endpoint, {
      name: client.nome,
      email: client.email,
      cpf: client.cpf,
      address: client.endereco,
      phone: client.telefone,
      salary: client.senha
    }
    )
  }

  // sendDataForRegister(name: string, email: string, cpf: string, phone: number, password: string) {
  //   const data = {name, email, cpf, phone, password}
  //   console.log("Cadastro feito")
  //   //return this.http.post(this.endpoint, data)
  // }
}
