let numeroUm = Number(prompt("Insira o primeiro numero: "));
let numeroDois = Number(prompt("Insira o primeiro numero: "));


console.log("O primeiro numero é maior que o segundo? ", numeroUm > numeroDois);

console.log("O primeiro numero é igual ao segundo? ", numeroUm === numeroDois);

let divisivel = numeroUm % numeroDois;

let verdadeiro;

if(divisivel < 1){
    verdadeiro = true;
}else {
    verdadeiro = false;
}

console.log("O primeiro numero é divisível pelo segundo? ", verdadeiro);

divisivel = numeroUm % numeroDois;

if(divisivel < 1){
    verdadeiro = true;
}else {
    verdadeiro = false;
}

console.log("O primeiro numero é divisível pelo segundo? ", verdadeiro);

divisivel = numeroDois % numeroUm;

if(divisivel < 1){
    verdadeiro = true;
}else {
    verdadeiro = false;
}

console.log("O primeiro numero é divisível pelo segundo? ", verdadeiro);

