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
    const data = {
      nome: client.nome,
      email: client.email,
      cpf: client.cpf,
      endereco: address,
      telefone: client.telefone,
      salario: client.salario
    }
    this.http.post(this.endpoint, data)
  }

  // sendDataForRegister(name: string, email: string, cpf: string, phone: number, password: string) {
  //   const data = {name, email, cpf, phone, password}
  //   console.log("Cadastro feito")
  //   //return this.http.post(this.endpoint, data)
  // }
}
