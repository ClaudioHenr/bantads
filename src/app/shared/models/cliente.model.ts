import { Endereco } from "./endereco.model";

export class Cliente {
    nome?: string;
    email?: string;
    endereco?: Endereco;
    cpf?: string;
    telefone?: string;
    salario?: number;
    senha?: string;

    constructor() {}
}
