//Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

/*
Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;
*/

const pessoa = () => {
    let idade = Number(prompt("Digite sua idade: "));
    let terminouEnsinoMedio = prompt("Ja terminou o ensino medio? ");
    let cursaFaculdade = prompt("Faz faculdade? ");

    //PRIMEIRO IF
    if(idade >= 18){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade");
    }

    //SEGUNDO IF
    if(terminouEnsinoMedio === "sim" || terminouEnsinoMedio === "SIM"){
        terminouEnsinoMedio = true;
        console.log("Terminou o ensino medio");
    }else {
        terminouEnsinoMedio = false;
        console.log("Não terminou o ensino medio");
    }

    //TERCEIRO IF
    if(cursaFaculdade === "sim" || cursaFaculdade === "SIM"){
        cursaFaculdade = true;
        console.log("Cursa Faculdade");
    }else {
        console.log("Não cursa Faculdade")
    }

}



pessoa();


