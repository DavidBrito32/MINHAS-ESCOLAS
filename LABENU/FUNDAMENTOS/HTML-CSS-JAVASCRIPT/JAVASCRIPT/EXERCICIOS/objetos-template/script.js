// CRIAR UM OBJETO

const estudante = {
  nome: "João",
  numeroMatricula: "1234",
  idade: 28,
  notasSemestre: [8, 7, 9],
};

//adicionando elementos que nao existem no objeto com cochetes
estudante["modulo"] = 1;

//adicionando elementos que nao existem no objeto usando a notacao do ponto e em forma de arraay

estudante.skills = ["PHP", "Javascript", "CSS", "HTML5"];

//acessando os elementos do objeto

console.log(estudante.nome);
console.log(estudante.numeroMatricula);
console.log(estudante.notasSemestre[1]);
console.log(estudante.skills);
console.log(estudante.modulo);

//realizando uma copia do meu objeto

let copiaObj = {
  ...estudante,
};

//alterando a propriedade herdada nome

copiaObj.nome = "AstroDev";

console.log(copiaObj.nome);

// EXERCIOS

const carrinho = {
  nome: "Davi",
  formaPagamento: "PIX",
  endereco: "Av. Caminho do sol, 3973, Porto das dunas, Aquiraz-CE",
};
console.log(carrinho);


//adicionando um array de objetos e ao mesmo tempo incluindo a compras no objeto
carrinho['compras'] = [
  {
  nomeProduto: "PS5",
  Preco: 5000,
  quantidade: 1,
}
];

console.log(carrinho);

let carrinhoPresente = {
  ...carrinho,
}


console.log(carrinhoPresente)

carrinhoPresente.nome = prompt("Digite o nome do comprador: "); 

carrinhoPresente.formaPagamento= prompt("Digite a forma de pagamento escolhida: "); 

console.log(carrinhoPresente)




