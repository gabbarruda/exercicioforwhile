//Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.
let prompt = require("prompt-sync")();

let numeroDigitado = parseInt(prompt("Digite um número de 0 a 10: "))

for (let n = 0; n <= 10; n +=1) {
    resultado = n * 1
    console.log( `${n} X ${numeroDigitado} ${n*numeroDigitado}`)
}

