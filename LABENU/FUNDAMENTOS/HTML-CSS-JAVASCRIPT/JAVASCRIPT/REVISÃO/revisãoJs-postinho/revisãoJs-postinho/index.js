// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------
/*
// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 2));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
    //  Sua lógica aqui
}

// c-)Faça uma função chamada "verificaSeEMaior"

console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= FALSE
// b-) 1=='1'= TRUE
// c-) 'a'==='b'= FALSE
// d-) 'b'>'a'= TRUE
// e-) 0!==null= true


// CONDICIONAIS
*/
// Exercício 3------------------------------------------------------------------------------------

const cadastro = () => {
  const nome = prompt("Informe Seu Nome: ");
  const anoNasc = Number(prompt("Informe Seu ano de nascimento: "));
  const senha = prompt("Informe Sua senha: ");
  const nacionalidade = prompt("Informe sua nacionalidade: ");
  const anoAtual = 2023;
  const idade = anoAtual - anoNasc;
  const usuario = [];

  if (
    idade >= 18 &&
    (nacionalidade.toUpperCase() === "BRASILEIRO" ||
      nacionalidade.toUpperCase() === "BRASILEIRA")
  ) {
    usuario.push(nome, anoNasc, senha, nacionalidade);
    // alert('Dados Cadastrados com sucesso!')
    console.log(
      `Os Dados do usuario são:\n Nome: ${usuario[0]}\n Ano de Nascimento: ${
        usuario[1]
      }\n Nacionalidade: ${usuario[3].toUpperCase()}`
    );
  } else {
    console.log(
      "Você não pode se cadastrar, pois não atende aos requisitos solicitados"
    );
  }
};

// Exercício 4-----------------------------------------------------------------------------------------------

const login1 = () => {
  const usuario = prompt("Informe seu nome de usuário: ");
  const senha = prompt("Informe sua senha: ");
  const login = "labenu";
  //  Sua lógica aqui
  if (login === senha) {
    console.log(`Usuario Logado`);
  } else {
    console.log(
      `Desculpe, Não foi possivel logar com os dados informados, tente novamente!`
    );
  }
};

// console.log(login1());

// Exercício 5-----------------------------------------------------------------------------------------------
const primeiraDose1 = (vacinaTomada, dataAtual) => {
  //cadastro();
  let vacina1 = "coronavac";
  let coronavac = 28; //DIAS DE RETORNO PARA TOMAR A SEGUNDA DOSE DA CORONAVAC;
  let vacina2 = "astrazenica";
  let astrazeneca = 90; //DIAS DE RETORNO PARA TOMAR A SEGUNDA DOSE DA ASTRAZENICA;
  let vacina3 = "pfizer";
  let pfizer = 90; //DIAS DE RETORNO PARA TOMAR A SEGUNDA DOSE DA PFIZER;
  //----------------------------------------------------------------
  //FORMATADOR DE DATA PADRAO BRASILEIRO
  const dataFormatada = (dataBR) => {
    let newDate = new Date(dataBR);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/ ${newDate.getFullYear()}`;
  };
  //----------------------------------------------------------------

  if (vacinaTomada.toUpperCase() === vacina1.toUpperCase()) {
    let diasRetorno = 28;
    let dataRetorno = new Date();
    dataRetorno.setDate(dataRetorno.getDate() + diasRetorno);
    return `Olá! A próxima dose da ${vacinaTomada} é daqui a ${diasRetorno} dias. Compareça no posto na data ${dataFormatada(
      dataRetorno
    )}.`;
  } else if (vacinaTomada.toUpperCase() === vacina2.toUpperCase()) {
    let diasRetorno = 90;
    let dataRetorno = new Date();
    dataRetorno.setDate(dataRetorno.getDate() + diasRetorno);
    return `Olá! A próxima dose da ${vacinaTomada} é daqui a ${diasRetorno} dias. Compareça no posto na data ${dataFormatada(
      dataRetorno
    )}.`;
  } else if (vacinaTomada.toUpperCase() === vacina3.toUpperCase()) {
    let diasRetorno = 90;
    let dataRetorno = new Date();
    dataRetorno.setDate(dataRetorno.getDate() + diasRetorno);
    return `Olá! A próxima dose da ${vacinaTomada} é daqui a ${diasRetorno} dias. Compareça no posto na data ${dataFormatada(
      dataRetorno
    )}.`;
  }else{
    return 'Vacina não encontrada';
  }
};
// console.log(primeiraDose1("pfizer", "06-16-2023"));
//--------------------------------------------------------------

// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose1 = (nomeDoUsuario) => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "incompleta" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].nome.toLowerCase() === nomeDoUsuario.toLowerCase()) {
      usuarios[i].imunizacao = "completa";
      console.log(usuarios[i]);
      break; // Encerra o loop após encontrar o usuário correspondente
    }
  }
  
};

segundaDose1("artur");


// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados1 = () => {
  const usuarios = [
    { nome: "Artur", imunizacao: "incompleta" },
    { nome: "Barbara", imunizacao: "completa" },
    { nome: "Carlos", imunizacao: "incompleta" },
  ];
  //  Sua lógica aqui

  for(let i = 0; i < usuarios.length; i++){
    if (usuarios[i].imunizacao === 'incompleta'){
      console.log( `Olá ${usuarios[i].nome}, você está atrasado!`);
    }
  }
};
// console.log(avisoAosAtrasados1());

// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
  {
    nome: "Artur",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "pfizer",
    imunizacao: "incompleta",
  },
  {
    nome: "Bárbara",
    ano: 1984,
    nacionalidae: "brasileira",
    senha: "labenu",
    vacina: "astrazenica",
    imunizacao: "completa",
  },
  {
    nome: "Carlos",
    ano: 2000,
    nacionalidae: "brasileiro",
    senha: "123456",
    vacina: "coronavac",
    imunizacao: "incompleta",
  },
];

const cadastro1 = () => {
  //  Sua lógica aqui
};
// console.log(cadastro());

const login = () => {
  //  Sua lógica aqui
};
// console.log(login());

const primeiraDose = () => {
  //  Sua lógica aqui
};
// console.log(primeiraDose());
const segundaDose = (nomeDoUsuario) => {
  //  Sua lógica aqui
};
// console.log(segundaDose("ALGUM NOME AQUI"));

const avisoAosAtrasados = () => {
  //  Sua lógica aqui
};
