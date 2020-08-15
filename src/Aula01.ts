// o typescript é altamente tipado;
//  any -> recebe qualquer tipo de dado
// quando não o typescript por padrão o tipo que esta sendo atribuido
let nome: string = 'Vinicius';


// Sempre começa no index = 0;
// list[0] <- index
// let list: Array<number | string> = [];
let list: Array<string> = [];
list.push('Texto Array')
list.push('Vinicius');

// T -> Qualquer tipo de informação.
// Map - retorna um novo array<T>
const mapTeste = list.map((v)=> v.length)
console.log('map',mapTeste)

// ele vai retorna o primeiro item que atender a condição
const findTeste = list.find((item) => {
    if(item.length > 8) {
        return item;
    }
})
console.log('find ===> ', findTeste);


const filterTeste: string[] = list.filter((item: string) => {
    if(item.length >= 8) {
        return item;
    }
})
console.log('filter ===> ', filterTeste);

let foreachSoma: number = 0;
const foreachTeste = list.forEach((item: string) => {
    if(item.length >= 8) {
        foreachSoma += item.length;
    }
})
console.log('forEach ===> ', foreachTeste, 'soma ===>', foreachSoma);

// Crie um array a onde ele comece na posição 1 e não 0;
//  Criar apartir da posição o alfabeto utilzando o array