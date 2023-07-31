// Crie um código que receba um número por **prompt** e verifique se esse número é divisível por 2 **ou** por 3.


const teste = () => {
    let numero = Number(prompt("insira um numero para testar"));

    //fazendo a operação com IFS aninhados
    if (numero % 2 === 0) {
        console.log("O numero é divisivel por 2");
        if(numero % 3 === 0){
            console.log("O numero é divisivel por 3");
        }
    }else {
        console.log("O numero não é divisivel nem por 2 e nem por 3");
    }

    //fazendo a operação com operadores logicos
    if (numero % 2 === 0 || numero % 3 === 0) {
        console.log("O numero é divisivel por 2 ou por 3");
    }else{
        console.log("O numero não é divisivel nem por 2 e nem por 3");
    }
}

teste();