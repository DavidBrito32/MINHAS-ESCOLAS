//códigos a serem reescritos

// a)
/*
if(nome === "José"){
	console.log("Oi, Zé!")
} else {
	console.log("Olá, " + nome)
}
*/

const nome = prompt("Insira seu nome: ");

nome === "José" ? console.log("Oi, José") : console.log(`olá ${nome}`);


// b)
/*
if(idade >= 18){
	console.log("Pode tirar carteira de motorista!")
} else {
	console.log("Ainda não pode tirar carteira de motorista!")
}
*/

const idade = Number(prompt("Insira sua Idade: "));

idade >= 18 ? console.log("Pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista!");
