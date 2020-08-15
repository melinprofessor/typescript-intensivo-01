class Jogador {

    constructor(nome) {
        this.nome = nome;
    }

    exibirNome() {
        console.log(`O nome do jogado é : ${this.nome}`)
    }
}

module.exports = Jogador