//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

const soma = (a, b) => {
    return a + b;
};
console.log(soma(7, 9));

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const numero = (a, b) => {
    console.log(a >= b)
}

console.log(numero(14, 6));

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const parouImpar = (a) => {
    console.log(a % 2 === 0);
}

console.log(parouImpar(2));

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const inss = (sal) => {
    let desconto = sal * 0.1;
    console.log(sal - desconto);
}

console.log(inss(4500));


