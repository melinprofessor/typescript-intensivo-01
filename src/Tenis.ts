import Jogador from './Jogador';

// classe filho
export default class Tenis extends Jogador {

    constructor(nome: string) {
        super(nome, 'Tenis');
    }
}

