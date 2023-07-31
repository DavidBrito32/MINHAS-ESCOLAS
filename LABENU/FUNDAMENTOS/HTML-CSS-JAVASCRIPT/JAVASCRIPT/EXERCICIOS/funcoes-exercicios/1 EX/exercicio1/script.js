// FAZER UMA FUNÇÃO PARA CHAMAR SEU NOME:

function exibeNome(nome){
    return `Ola, ${nome}`;
}

console.log(exibeNome("Davi"));

// receber um numero e fazer a taboada dele

function tabuada(mult){
    console.log(`${mult} X ${1} = ${mult * 1}`);
    console.log("____________________________");
    console.log(`${mult} X ${2} = ${mult * 2}`);
    console.log("____________________________");
    console.log(`${mult} X ${3} = ${mult * 3}`);
    console.log("____________________________");
    console.log(`${mult} X ${4} = ${mult * 4}`);
    console.log("____________________________");
    console.log(`${mult} X ${5} = ${mult * 5}`);
    console.log("____________________________");
    console.log(`${mult} X ${6} = ${mult * 6}`);
    console.log("____________________________");
    console.log(`${mult} X ${7} = ${mult * 7}`);
    console.log("____________________________");
    console.log(`${mult} X ${8} = ${mult * 8}`);
    console.log("____________________________");
    console.log(`${mult} X ${9} = ${mult * 9}`);
    console.log("____________________________");
    console.log(`${mult} X ${10} = ${mult * 10}`);
    console.log("____________________________");
}

console.log(tabuada(45));

// EXEMPLO DE UMA ARROW FUNCTION

// definindo uma arrow function

const somar = (a, b) => {
    return a + b;
};

let dividir = function(a, b){
    return a / b;
}
  
  // chamando a arrow function
  const resultado = somar(2, 3);
  console.log(resultado);