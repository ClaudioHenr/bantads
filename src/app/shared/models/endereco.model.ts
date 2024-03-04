export class Endereco {
    type: string;
    endereco: string;
    numero: number;
    complement: string;
    zipCode: string;
    cidade: string;
    estado: string;

    constructor(
        type: string,
        endereco: string = "",
        numero: number = 0,
        complement: string = "",
        zipCode: string = "",
        cidade: string = "",
        estado: string = ""
    )
    {
        this.type = type;
        this.endereco = endereco;
        this.numero = numero;
        this.complement = complement;
        this.zipCode = zipCode;
        this.cidade = cidade;
        this.estado = estado;
    }
}
