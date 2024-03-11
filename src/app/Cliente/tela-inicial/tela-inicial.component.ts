import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css',
})
export class TelaInicialComponent {
  cliente = {
    nome: 'João da Silva',
    numeroConta: '123456789',
    saldo: 5000.5,
    transacoes: [
      { data: new Date(), descricao: 'Depósito', valor: 1000.0 },
      { data: new Date(), descricao: 'Compra', valor: -500.5 },
      // Adicione mais transações conforme necessário
    ],
  };
}
