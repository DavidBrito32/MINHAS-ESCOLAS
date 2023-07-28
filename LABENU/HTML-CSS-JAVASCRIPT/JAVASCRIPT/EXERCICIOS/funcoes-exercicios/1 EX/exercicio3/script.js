//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

//b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o Segundo numero: "));

let soma = (num1, num2) => {
    return num1 + num2;
}

let subtração = (num1, num2) => {
    return num1 - num2;
}

let multiplicação = (num1, num2) => {
    return num1 * num2;
}

let divisão = (num1, num2) => {
    return num1 / num2;
}


//c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

console.log(soma(num1, num2))
console.log("________________");
console.log(subtração(num1, num2))
console.log("________________");
console.log(multiplicação(num1, num2));
console.log("________________");
console.log(divisão(num1, num2));
console.log("________________");

//d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

let var1 = soma(num1, num2);
let var2 = subtração(num1, num2);
let var3 = multiplicação(num1, num2);
let var4 = divisão(num1, num2);

console.log(`Esse e o retorno da variavel 1 ${var1}`);
console.log(`Esse e o retorno da variavel 2 ${var2}`);
console.log(`Esse e o retorno da variavel 3 ${var3}`);
console.log(`Esse e o retorno da variavel 4 ${var4}`);