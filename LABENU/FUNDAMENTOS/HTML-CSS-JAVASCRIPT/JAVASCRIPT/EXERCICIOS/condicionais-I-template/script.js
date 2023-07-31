/*
let boleano1 = true;
let boleano2 = false;
let boleano3 = true

if(!boleano1) {
    alert("é verdadeiro!");
}else if(boleano2 === boleano3){
    alert("é falso!")
}else if(boleano1 === boleano3){
    alert("é verdadeiro!");
}

*/
/*VOTO*/


/*
let idade = 17;

if(idade >= 18){
    alert("Você tem mais de 18 anos! então pode votar!");
}else if (idade === 16 && idade >= 16){
    alert(`Você tem menos de 18 anos! porem se encaixa no direito ao voto: sua idade é:  ${idade} anos!`);
} else if(idade >= 70) {
    alert("Você não é obrigado a votar!");
}
*/

let nota1 = Number(prompt("Insira a primeira nota"));

let nota2 = Number(prompt("Insira a primeira nota"));


let nota3 = Number(prompt("Insira a primeira nota"));

let media = (nota1 + nota2 + nota3) / 3;


if(media <= 10){

    alert("Aluno aprovado com a nota MAXIMA")

} else if (media >= 5 && media <= 10){

    alert(`Aprovado! sua media foi: ${media.toFixed(1)}`);

}else if(media < 5 || media === 3){

    alert(`Recuperação pois sua media foi: ${media.toFixed(1)}`)

}else if(media < 3){

    alert(`Reprovado pois sua media foi: ${media.toFixed(1)}`)

}else{

    alert("Dado invalido")
}
