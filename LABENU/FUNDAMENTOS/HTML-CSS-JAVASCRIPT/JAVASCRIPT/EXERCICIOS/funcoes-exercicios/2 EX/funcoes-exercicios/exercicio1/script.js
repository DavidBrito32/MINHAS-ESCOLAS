// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

//->
// function imprimeNome(nome){
    // console.log(`Olaaa, seja bem vindo ${nome}`);
// }

// imprimeNome("Davi");

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

/*

function taboada(numero){
    for (let index = 1; index <= 10; index++) {
        console.log(`${numero} X ${index} = ${numero * index}`);
    }
    console.log(`________________________________________`);
}

taboada(1);
taboada(2);
taboada(3);
taboada(4);
taboada(5);
*/


//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


//funcao nao nomeada
const nome = function(exibir){
    console.log(`Olaaa, seja bem vindo ${exibir}`);
}

nome(prompt("Digite seu nome: "));


//__arrow functions__

const nome2 = (arrow) => {
    console.log(`Olaaa, seja bem vindo ${arrow}, um exemplo de arrow function`);
}


nome2(prompt("Digite seu nome: "));
