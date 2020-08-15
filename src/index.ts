
import Jogador from './Jogador';

import Tenis from './Tenis';

// metodo estatico
console.log(Jogador.tipoJodador())

// instanciar = new Classe
const novoJogador = new Jogador('Felipe')

// utilizando o metodo
novoJogador.exibirNome()
const nome = novoJogador.exibirNomeComRetorno()
console.log(nome)


const novoJogadorTenis = new Tenis('Fred')
novoJogadorTenis.exibirNome()
novoJogadorTenis.exibirTipo();