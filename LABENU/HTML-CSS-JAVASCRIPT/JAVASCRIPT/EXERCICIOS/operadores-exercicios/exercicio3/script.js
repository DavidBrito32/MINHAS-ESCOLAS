// 5 é maior que 20 e também é menor que 2;

console.log((5 > 20), (5 < 2));

//b) 5 é igual a 5 ou é igual a “5”;

console.log(5 === 5 || 5 === "5");

//c) negação de (vinte é maior que cinquenta)

console.log(20 >! 50);

//d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)


console.log( 20 >! 50 || 50 > 60); // operacao logica neste caso, uma das duas tem q serem verdadeiras para que seja true

//

const operacao1 = 20 < 50 && 50 > 90;
console.log(operacao1);

/*O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais, mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.*/

//Levando em consideração os dados abaixo, calcule o salário de Fulano da Silva (itens 1 a 5):

/*
a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00
*/
let quantidadeDeFilhos = 2;

const salario = 2000;

let comissao = 10;

const inss = 5;

const creche = 45.50 * quantidadeDeFilhos;

let salarioMenosInss = (salario * inss) / 100; //AQUI RETORNA SO O VALOR DO DESCONTO DO INSS


//comissoes de jan a jun
let ComissaoJaneiro = 5784.50 * 0.1;     //578.45
let ComissaoFevereiro = 3418.41 * 0.1;   //341.84
let ComissaoMarco = 4124.10 * 0.1;       //412.41
let ComissaoAbril = 1874 * 0.1;          //187.40
let ComissaoMaio = 7000 * 0.1;           //700.00
let ComissaoJunho = 9450 * 0.1;          //945.00

//calculando cada salario + comissao com desconto do inss incluindo o valor da creche

let SalInssComissaoJaneiro = (salario + ComissaoJaneiro + creche) * inss /100;
let SalInssComissaoFevereiro = (salario + ComissaoFevereiro + creche) * inss /100;
let SalInssComissaoMarco = (salario + ComissaoMarco + creche) * inss /100;
let SalInssComissaoAbril = (salario + ComissaoAbril + creche) * inss /100;
let SalInssComissaoMaio = (salario + ComissaoMaio + creche) * inss /100;
let SalInssComissaoJunho = (salario + ComissaoJunho + creche) * inss /100;



// 1) O salário fixo mais o auxílio creche:

console.log("\nSo o salario fixo com o auxilio creche fica: ", salario + creche, "R$");

//2) Quanto Fulano de Silva receberá de comissão em janeiro (dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

console.log("\nFulano, no mes de janeiro ira receber de comissao: ", ComissaoJaneiro, " R$, e seu salario com a comissao de janeiro sera de: ", salario + ComissaoJaneiro + creche);

//3) Quanto Fulano de Silva será descontado em janeiro pelo INSS (o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas);


//4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

console.log("\nEm Janeiro, Fulano ira receber liquido, ", salario + ComissaoJaneiro + creche - SalInssComissaoJaneiro.toFixed(2));
console.log("\nEm Fevereiro, Fulano ira receber liquido, ", salario + ComissaoFevereiro - SalInssComissaoFevereiro.toFixed(2));
console.log("\nEm Marco, Fulano ira receber liquido, ", salario + ComissaoMarco - SalInssComissaoMarco.toFixed(2));
console.log("\nEm Abril, Fulano ira receber liquido, ", salario + ComissaoAbril - SalInssComissaoAbril.toFixed(2));
console.log("\nEm Maio, Fulano ira receber liquido, ", salario + ComissaoMaio - SalInssComissaoMaio.toFixed(2));
console.log("\nEm Junho, Fulano ira receber liquido, ", salario + ComissaoJunho - SalInssComissaoJunho.toFixed(2));










