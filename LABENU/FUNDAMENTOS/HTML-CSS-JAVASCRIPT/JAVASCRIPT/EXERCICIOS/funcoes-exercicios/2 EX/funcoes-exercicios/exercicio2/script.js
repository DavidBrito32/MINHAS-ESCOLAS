//Declare e invoque as funções abaixo:

//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

const soma = (numero1, numero2) =>{
    console.log(`a soma dos numeros ${numero1} + ${numero2} e igual a: ${numero1 + numero2}`)
} //arrow function

// soma(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const bool = (numberOne, numberTwo) => {
    console.log(`o numer ${numberOne} e maior ou igual que o ${numberTwo}: ${numberOne >= numberTwo}`)
}

// bool(Number(prompt("Digite um numero: ")), Number(prompt("Digite outro numero: ")));

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

const parOuImpar = (num) => {
    console.log(`\no numero ${num} é par? ${num % 2 === 0}`)
}

parOuImpar(Number(prompt("Digite um numero: ")));

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

const salLiq = (salario) => {
    let inss = 10;
    let liquido = salario * inss / 100;

    console.log(`O salario liquido com o desconto do inss fica: R$ ${salario - liquido}`);
}

salLiq(Number(prompt("Digite qual salario voce ira ganhar: ")));
