// let idade = 14;

/* 
if(idade >= 13){
    if(idade <= 17){
        console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu");

    }else{

    console.log("Idade maior que 18 anos");

    }

}else{
    console.log("Consulte outras possibilidades do Labank");
}

*/


// //agora fazer com operador ternario
// if(idade >= 13 && idade <= 17){
//     console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu");
// }else {
//     console.log("Consulte outras possibilidades do Labank");
// }


// adicionando funcionalidades

// const possuiConta = prompt("Você ja possui conta no Labank? Responda com SIM OU NÃO");

// possuiConta.toLowerCase() === sim ? console.log("Seja bem vindo") : console.log("Faça ja seu cadastro");




/*
idade >= 13 && idade <= 17 ? console.log("A pessoa dependente já pode ter um cartão de crédito vinculado ao seu") : console.log("Consulte outras possibilidades do Labank");
*/


// let cartao;

// let ramal = prompt("Digite o ramal desejado: ");

 

// switch(ramal){
//     case '1':
//         cartao = "Fácil";
//         break;

//     case '2':
//         cartao = "Black";
//         break;

//     case '3':
//         cartao = "Platinum";
//         break;

//     case '4':
//         cartao = "Master Gold"
//         break;

//     default :
//     console.log("Escolha uma das 4 opções disponiveis")
//     console.log(
//         "1: Fácil\n2: Black \n3: Platinum\n4: Master Gold"
//     )
// }


// console.log(cartao);


//ex 01: crie um codigo que receba um numero por prompt e verifique se ele é divisivel por dois ou por tres

let numero1 = Number(prompt("insira um numero para testar: "));

if(Number(numero1) % 2 === 0){

    console.log("O numero é divisivel por 2");    

    if(numero1 % 3 ===0){
        console.log("O numero é divisivel por 3");
    } 

    numero1 === 30 ? console.log("UFA, ACERTEI") : console.log("Não foi dessa vez")//condição ternaria

   
}
else{
    console.log("O numero não é divisivel por 2 nem por 3");
}


// fazer via operador ternario:

// numero1 % 2 === 0 || numero1 % 3 === 0 ? console.log("O numero é divisivel por 2 ou por 3") : console.log("O numero não é divisivel por 2 nem por 3");


switch(numero1){
    case 6:
        console.log("Numero automatico");
        break;
    case 12:
        console.log("Numero automatico");
        break;
    case 18:
        console.log("Numero automatico");
        break;
    case 24:
        console.log("Numero automatico");
    case 30:
        console.log("Numero automatico");
        break;
    default:
        console.log("O numero é maior que 30 ou menor que 6, tente novamente!");
}

