import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../shared/models/cliente.model';
import { Endereco } from '../../shared/models/endereco.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private endpoint = 'http://localhost:3000/clientes'

  constructor(private http: HttpClient ) { }

  sendDataForRegister(client: Cliente, address: Endereco) {
    const data = {
      nome: client.nome,
      email: client.email,
      cpf: client.cpf,
      endereco: address.endereco,
      telefone: client.telefone,
      salario: client.salario
    }
    const dadosFormatados = `Nome: ${data.nome}, Email: ${data.email}, CPF: ${data.cpf}, Endereço: ${data.endereco}, Telefone: ${data.telefone}, Salário: ${data.salario}`;
    console.log("Enviando para gateway...", dadosFormatados);

    this.http.post(this.endpoint, data).subscribe(
      (response) => console.log("Resposta recebida", response)
    )
  }

  // sendDataForRegister(name: string, email: string, cpf: string, phone: number, password: string) {
  //   const data = {name, email, cpf, phone, password}
  //   console.log("Cadastro feito")
  //   //return this.http.post(this.endpoint, data)
  // }
}
