
// utilizar as variaveis globais com this.[nome]
// classe base // classe mae
class Jogador {

    nome: string;

    tipo: string | undefined;

    // constructor é o primeiro metodo a ser executado
    // constructor pode ser opcional
    constructor(nome: string, tipo?: string) {
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirNome() {
        console.log(`O nome do jogado é : ${this.nome}`)
    }

    // metodo com retorno
    exibirNomeComRetorno() {
        return this.nome;
    }

    // metodo void
    exibirTipo() {
        const tipo = `O tipo de esporte é: ${this.tipo}`;
        console.log(tipo);
    }

    // metado estatico
    static tipoJodador() {
        return 'FUTEBOL';
    }
}

export default Jogador;