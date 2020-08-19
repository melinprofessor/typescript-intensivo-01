// função void
function calcular() {
    console.log(2*2)
}

// função possui a palavra return e por isso ela é uma função
// que retorna valor
function calc() {
    return 3*9
}

// toda função que é void = undefined
const resultado = calcular();
console.log(resultado)

const resultado2 = calc();
console.log(resultado2) 

// ECMA anteriores
const falar = function() {
    return 'Olá mundo!'
}
console.log(falar())

// ES5 e E56
// arrow function
const hello = () => {
    return 'Olá mundo!'
}

console.log(hello())

// parametros obrigatórios
// parametros opcional = ?
// sempre colocar os paremetros obrigatório primeiro
const psg = ( jogador: string, quantidadeGol?: any) => {
    return `O PSG fez ${quantidadeGol} gols`
}
console.log(psg('Neymar',3))


//  assincrono e sincrono

//  assincrono e executa varias linhas ao mesmo tempo
//  sincrono ele executa uma linha por vez

// java/node => assincro

const pizza = ()=>{
    const promise= new Promise((resolve, reject)=>{
        setTimeout(() => {
           resolve('Pizza Pronta');
        },5000)
    })

    return promise
}

// .then => callback
// sincrono
pizza().then((resultadoPromise)=>{
    console.log('Cliente:', resultadoPromise)
    console.log('*********')
}).catch((erro)=>{
    console.log('Cliente:', erro.message)
})

// async function
// permite utilizar o await
// await = esperar/aguardar
// ES5 e ES6
const retirar = async () => {
    const resultado = await pizza();
    console.log('Retirar', resultado)
}


retirar();