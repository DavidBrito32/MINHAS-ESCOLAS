// EXERCICIO 3

//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

const soma = (num1, num2) => {
    console.log(`\nA soma de ${num1} + ${num2} = ${num1 + num2}`);
    console.log(`______________________________________________`);
}

const subtração = (num1, num2) => {
    console.log(`\nA subtração de ${num1} - ${num2} = ${num1 - num2}`);
    console.log(`______________________________________________`);
}

const multiplicacao = (num1, num2) => {
    console.log(`\nA multiplicação de ${num1} * ${num2} = ${num1 * num2}`);
    console.log(`______________________________________________`);
}

const divisao = (num1, num2) => {
    console.log(`\nA divisão de ${num1} / ${num2} = ${num1 / num2}`);
    console.log(`______________________________________________`);
}

//testando as funcoes

// soma(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

// subtração(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

// multiplicacao(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

// divisao(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

//b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let soma1 = soma(60, 3);
let subtracao1 = subtração(50, 6);
let multiplicacao1 = multiplicacao(345, 6);
let divisao1 = divisao(4, 2);

//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

soma(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

subtração(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

multiplicacao(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

divisao(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));



