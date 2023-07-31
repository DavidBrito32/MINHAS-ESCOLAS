/*
Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
*/
let comer;
let total = 0;
let quantidade = 0;

comer = prompt("Você deseja comer mais coxinhas?\n [S] para sim\n[N] para não");
while(comer.toUpperCase() === 'S'){

let preco = 2.5;
total = Number(total) + Number(preco);
quantidade = Number(total) / 2.5;

//perguntinha para fazer com que o laço continue ou saia de sua repetição
comer = prompt("Você deseja comer mais coxinhas?\n [S] para sim\n[N] para não");
}

if(quantidade > 10){

    console.log(`Você comeu ${quantidade} coxinhas, e  o valor total da conta foi de: ${total}R$, vê se diminui na massa seu Gordo(a)!!!!`);

}else{

    console.log(`Você comeu ${quantidade} coxinhas, e  o valor total da conta foi de: ${total} S
    R$`);
}

