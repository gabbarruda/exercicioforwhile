//  5. Imprimir os primeiros 10 números da sequência de Fibonacci.
// algoritmos do Finabonacci 
//0
//1
//2
//3
//5
//8
//13

// anterio (numero)
// atual (atual)

// 


let anterior = 0
let atual = 1

console.log(anterior)
console.log(atual)


for(let contador = 3; contador <= 10; contador++){
    let novo = anterior + atual

    console.log(novo)

    anterior = atual 
    atual = novo
}
