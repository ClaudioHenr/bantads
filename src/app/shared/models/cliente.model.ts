import { Endereco } from "./endereco.model";
import { Pessoa } from "./pessoa.model";

export class Cliente extends Pessoa {
    endereco: Endereco;
    cpf: string;
    telefone: string;
    salario: number;

    constructor(
        nome: string,
        email: string,
        senha: string,
        endereco: Endereco,
        cpf: string,
        telefone: string,
        salario: number
    )
    {
        super(nome, email, senha);
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
        this.salario = salario;
    }
}
