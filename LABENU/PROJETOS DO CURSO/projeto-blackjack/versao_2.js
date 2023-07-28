/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */
alert(`Olá, Bem vindo ao BlackJack V.2`);
let novoJogo = confirm(`Deseja Iniciar um novo Jogo?`);
/*-----------------------------------------------------------------------------------------------------------------*/
if (novoJogo) {
  //DECLARAÇÃO DAS VARIAVEIS
  let jogador = prompt("Olá usuário, digite seu nome para continuar:");
  let pontosUsuario = [];
  let pontosComputador = [];

  let somaUsuario = 0;
  let somaComputador = 0;

  let puxarCarta = confirm(`Puxe sua carta para iniciar:`);
  let sair = true;
  let rodada = 0; /*VARIAVEL DE CONTROLE PARA CONTROLAR A POSIÇÃO DO ARRAY*/
  /*---------------------------------------------------------------------------------------------------------------*/
  //INICIO DO JOGO
  while (puxarCarta === true) {
    // ->INICIO DO WHILE
    pontosUsuario.push(comprarCarta()); //CARTA QUE O JOGADOR RECEBE AO INICIAR A RODADA
    pontosComputador.push(comprarCarta()); //CARTA QUE O COMPUTADOR RECEBE AO INICIAR A RODADA

    if (pontosUsuario[0].valor === 10) {
      alert(`${jogador}Voce puxou um A, zerando o contador!`);
      pontosUsuario[0].valor = 0;
    } else if (pontosComputador[0].valor === 10) {
      alert(`Computador Voce puxou um A, zerando o contador!`);
      pontosComputador[0].valor = 0;
    }

    alert(
      `Cartas puxadas:\n ${jogador}: ${pontosUsuario[rodada].texto} ${pontosUsuario[rodada].valor}\nComputador: Puxou sua carta`
    ); //IMPRESSÃO DAS CARTAS QUE AMBOS RECEBERAM
    /*----------------------------------------------------------------------------------------------------------------*/
    somaUsuario += pontosUsuario[rodada].valor; //FAZENDO A ATRIBUIÇÃO DE ACORDO COM SEU INDICE DO ARRAY
    somaComputador += pontosComputador[rodada].valor; //FAZENDO A ATRIBUIÇÃO DE ACORDO COM SEU INDICE DO ARRAY
    alert(
      `TOTAL DE PONTOS: RODADA: ${rodada + 1
      }\n${jogador}: ${somaUsuario} Pontos\nCOMPUTADOR: ${somaComputador} Pontos`
    );
    /*-----------------------------------------------------------------------------------------------------------------*/
    rodada++; //INCREMENTANDO A VARIAVEL DE CONTROLE TANTO DE RODADA QUANTO DOS ARRAYS
    if (somaUsuario > 21) {
      //VERIFICAÇÃO DE PONTUAÇÃO PARA CONTINUAÇÃO OU NÃO DO JOGO
      puxarCarta = false;
      sair = true;
    } else if (somaComputador > 21) {
      puxarCarta = false;
      sair = true;
    } else if (somaUsuario === 21) {
      puxarCarta = false;
      sair = true;
    } else if (somaComputador === 21) {
      puxarCarta = false;
      sair = true;
    } else {
      puxarCarta = confirm(`Deseja Puxar mais uma carta?:`);
      if (puxarCarta === false) {
        sair = false;
      }
    }
  } //FIM WHILE <-

  if (sair === false) {
    alert(
      `Voce escolheu sair, por tanto o jogo acabou\nPara iniciar novamente o jogo atualize esta pagina!`
    );
  }
  /*----------------------------------------------------------------------------------------------------------------*/
  if (somaUsuario === 21 && somaUsuario > somaComputador && somaUsuario <= 21) {
    alert(`Parabens ${jogador} Você ganhou com ${somaUsuario} Pontos`);
    alert(`Para iniciar um novo jogo Atualize esta pagina`);
    placarUsuario += 1;
  } else if (
    somaComputador === 21 &&
    somaComputador > somaUsuario &&
    somaComputador <= 21
  ) {
    alert(`Parabens Computador Você ganhou com ${somaComputador} Pontos`);
    alert(`Para iniciar um novo jogo Atualize esta pagina`);
    placarComputador += 1;
  } else if (somaUsuario > 21 && somaComputador > 21) {
    alert(`Ambos Ultrapassaram 21 pontos. Ninguem ganhou`);
  } else if (somaComputador > 21) {
    alert(
      `Parabens ${jogador} Você ganhou com ${somaUsuario} Pontos\nE o Computador marcou: ${somaComputador} Pontos`
    );
    placarUsuario += 1;
  } else if (somaUsuario > 21) {
    alert(
      `Parabens Computador Você ganhou com ${somaComputador} Pontos\nE ${jogador} marcou: ${somaUsuario} Pontos`
    );
    placarComputador += 1;
  } else if (somaUsuario === 21 && somaComputador === 21) {
    alert(`EMPATE`);
  } else if (somaUsuario > somaComputador && somaUsuario <= 21) {
    alert(
      `${jogador}, você venceu! com ${somaUsuario} Pontos\nPontuação do computador: ${somaComputador} Pontos`
    );
  } else if (somaComputador > somaUsuario && somaComputador <= 21) {
    alert(
      `Computador, você venceu! com ${somaComputador} Pontos\nPontuação do usuário: ${somaUsuario} Pontos`
    );
  } //FIM DOS ELSES INTERNOS
} else {
  //ELSE DO PRIMEIRO IF
  alert(`Você escolheu sair\nPara iniciar um novo Jogo atualize esta pagina!`);
}
