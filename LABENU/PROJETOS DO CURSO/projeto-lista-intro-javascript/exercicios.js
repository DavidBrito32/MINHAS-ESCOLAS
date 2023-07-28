// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("Digite a altura: "));
  largura = Number(prompt("Digite a Largura: "));
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite o ano atual: "));
  anoNascimento = Number(prompt("Digite o ano de nascimento: "));
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL.
  nome = prompt("Digite seu nome: ");
  idade = prompt("Digite seu idade: ");
  email = prompt("Digite seu email: ");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Digite a cor favorita 1: ");
  cor2 = prompt("Digite a cor favorita 2: ");
  cor3 = prompt("Digite a cor favorita 3: ");
  let favoritas = [cor1, cor2, cor3];
  console.log(favoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(texto) {
  // implemente sua lógica aqui
  const maiuscula = texto.toUpperCase();
  return maiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let unitario = custo / valorIngresso;
  return unitario;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(texto1, texto2) {
  // implemente sua lógica aqui
  return texto1.length === texto2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1];
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(text) {
  // implemente sua lógica aqui
  let texto1 = text[text.length-1];
  let texto2 = text[0];

  text[text.length-1] = texto2;
  text[0] = texto1;
  return text;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual: "));
  let anoNascimento = Number(prompt("Digite o ano de nascimento: "));
  let anoEmissaoIdentidade = Number(prompt("Digite o ano de emissão da identidade: "));

  let idade = anoAtual - anoNascimento;
  let tempoDesdeEmissao = anoAtual - anoEmissaoIdentidade;

  let precisaRenovar = false;

  if (idade <= 20 || (idade === 20 && tempoDesdeEmissao >= 5)) {

    precisaRenovar = tempoDesdeEmissao >= 5;

  } else if (idade <= 50 || (idade === 50 && tempoDesdeEmissao >= 10)) {

    precisaRenovar = tempoDesdeEmissao >= 10;

  } else {

    precisaRenovar = tempoDesdeEmissao >= 15;

  }

  console.log(precisaRenovar);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("tem mais de 18?:");
  let escolaridade = prompt("tem ensino médio completo?:");
  let disponibilidade = prompt("tem disponibilidade de horários?:");

  let verdadeiro;

  if((idade >= "sim") && (escolaridade === "sim") && (disponibilidade === "sim")){
    verdadeiro = true
  }else {
    verdadeiro = false
  }

  console.log(verdadeiro)

}
