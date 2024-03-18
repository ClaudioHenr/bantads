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
  
  // Lidar com:
  // MS Cliente: Criação do registro de Cliente
  // MS Autenticação: Criação do registro de autenticação do cliente
  // MS Conta: Criação do registro de conta do cliente
  // MS Gerente: Consulta de gerentes e contas para decidir o gerente que assume a nova conta

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

}
