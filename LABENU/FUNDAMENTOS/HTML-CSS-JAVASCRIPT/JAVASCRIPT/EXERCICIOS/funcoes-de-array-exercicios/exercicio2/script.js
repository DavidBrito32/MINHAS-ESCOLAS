/*
# Exercício 2
Crie um array de números que contenha 8 números.
Com este array e utilizando o `map()`, retorne os arrays abaixo:
*/

//1. Retorne um novo array contendo os números multiplicados por 5. Guarde esse array dentro de uma variável `const quintuplos`.

const numeros = [20, 25, 17, 28, 08, 19, 23, 56];

function multiplica(numero){
    return numero * 5;
}

const novoNumeros = numeros.map(multiplica);

console.log(`os Numeros ${numeros} foram multiplicados e agora valem: ${novoNumeros}`);

//2. Retorne um novo array contendo os números divididos por 2. Guarde esse array dentro de uma variável `const metades`.

function divisao(numero){
    return numero / 2;
}

const numerosDivididos = novoNumeros.map((numero) => numero / 2);

console.log(`os Numeros ${novoNumeros} foram divididos e agora valem: ${numerosDivididos}`);