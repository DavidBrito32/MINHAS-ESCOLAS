/*
Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3
*/

const nome = prompt("Ola, bem vindo, qual seu nome: ");

const comida1 = prompt("Qual a sua 1 comida favorita: ");
const comida2 = prompt("Qual a sua 2 comida favorita: ");
const comida3 = prompt("Qual a sua 3 comida favorita: ");

console.log(`ola Estas são as comidas favoritas de ${nome}: \n -${comida1} \n -${comida2}\n -${comida3}`);