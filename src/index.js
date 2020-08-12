// o javascript não é tipado

let nome = 'Vinicius';
nome = 2;
nome = {}


// arrays []
const lista = ['texto',true, null, undefined]
lista.push(2)
console.log(lista)


// Sempre começa no index = 0;
// list[0] <- index
// let list: Array<number | string> = [];
let list = [];
list.push('Texto Array')
list.push('Vinicius');

// T -> Qualquer tipo de informação.
// Map - retorna um novo array<T>
const mapTeste = list.map((v)=> v.length)
console.log(mapTeste)


const filterTeste = list.filter((item) => {
    if(item.length >= 8) {
        return item;
    }
})


console.log('filter ===> ', filterTeste);