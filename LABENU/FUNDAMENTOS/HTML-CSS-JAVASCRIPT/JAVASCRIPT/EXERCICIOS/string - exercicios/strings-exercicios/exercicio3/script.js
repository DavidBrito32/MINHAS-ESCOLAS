//a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

console.log(frase.length);

const Frase = frase;

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const guardaFrase = Frase.replace("verde", "rosa").replace("azul", "laranja");

console.log(guardaFrase);

//c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

console.log(guardaFrase.includes("verde"));
console.log(guardaFrase.includes("laranja"));

console.log(guardaFrase.length); //usei pra descobrir o tamanho, apos isso era so identificar a posicao



//**EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

let palavra = guardaFrase.substring(0, 74) + guardaFrase.substring(75, 101).toUpperCase();

console.log(palavra);