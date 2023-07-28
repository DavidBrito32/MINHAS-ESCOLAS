// DEFINIR 3 VARIAVEIS: NOME, IDADE: PRESENÇA

// ALTERE OS VALORES DAS VARIAVEIS ATRAVES DO USUARIO
/*
let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let presente = confirm("Confirme sua presença");

console.log(nome, idade, presente);
*/

// IMPRIMA TODAS AS VARIAVEIS EM APENAS UM CONSOLE.LOG



/**

let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));
let presente = confirm("Confirme sua presença");


console.log("Estudante", nome, "tem", idade, "Anos. Presença: ", presente);

console.log("Nome: ", typeof nome, " Idade: ", typeof idade, " Presença: ", typeof presente);
 */

//PENSE EM UM OBJETO, E A PARTIR DESDE OBJETO, CRIE 3 VARIAVEIS. PECA AO USUARIO PARA INSERIR VALORES AS 3 VARIAVEIS:

//OBJETO> AVIAO

const aviaoNome = prompt("Insira o nome do seu Avião: ");

let capacidadePassageiros = Number(prompt("Quantos passageiros ele consegue carregar?: "));

let Habilitado = confirm("Está disponivel para voo?: ");

console.log("O nome do avião é: ", aviaoNome, " ele comporta ", capacidadePassageiros, " passageiros e esta disponivel para voar?: ", Habilitado);

console.log( typeof aviaoNome, typeof capacidadePassageiros, " passageiros e esta disponivel para voar?: ", typeof Habilitado);