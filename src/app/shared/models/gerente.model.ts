export class Gerente {
    constructor(
        public idGerente?: number,
        public nome?: string,
        public email?: string,
        public cpf?: string,
        public telefone?: string,
        public totalClientes? : number,
        public saldoPositivoTotal?: number,
        public saldoNegativoTotal?: number,
    ){}
}
