// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// function imprimirNome(nome){
    // console.log(`Ola, ${nome}`);
// }

// imprimirNome("Davi");
// imprimirNome("Jacob");
// imprimirNome("Baruk");

// ex de funcao nao nomeada

/* 

const imprimirNome = function(nome){
    console.log(`Ola, ${nome}`);
}

const testaParidade = (numero) => {
    const verifica = numero % 2 === 0;
    const soma = numero + 10;
    const multiplica = numero * numero;

    return `O numero ${numero} e par? ${verifica}. Somado com 10 o resultado e ${soma}. Multiplicado por ele mesmo fica: ${multiplica}.`;
}

console.log(testaParidade(24));
*/

const verificaDados = (login, senha) => {
    const loginArmazenado = "ana@email.com";
    const senhaArmazenada = "123456";

    return loginArmazenado === login && senhaArmazenada === senha;
}


console.log(verificaDados("davidbrito.carneiro458@gmail.com", "Quixabinha1988"));
