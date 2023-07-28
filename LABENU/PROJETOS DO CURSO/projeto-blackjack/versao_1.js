/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */
let usuario = [comprarCarta()];
let computador = [comprarCarta()];
let pontosUsuario = 0;
let pontosComputador = 0;

let placarUsuario = 0;
let placarComputador = 0;

alert("Boas vindas ao jogo de BlackJack!");
let novoJogo = confirm("Deseja iniciar um novo Jogo?");
//if para iniciar o jogo ou não
let rodada = 1;

if (novoJogo === true) {
  //----------------------------------------------------------------------------------------------
  while (novoJogo !== false) {
    alert(`O jogo Iniciou: ${rodada}° - Rodada:`);
    usuario.push(comprarCarta());
    computador.push(comprarCarta());
    alert(
      `usuario recebeu: ${usuario[0].texto} ${usuario[0].valor}\nComputador recebeu: ${computador[0].texto} ${computador[0].valor}`
    );
    pontosUsuario += usuario[0].valor;
    pontosComputador += computador[0].valor;
    if (pontosUsuario > pontosComputador) {
      alert("O jogador ganhou o jogo");
      placarUsuario++;
    } else if (pontosUsuario === pontosComputador) {
      alert("EMPATE");
    } else {
      alert("O computador ganhou o jogo");
      placarComputador++;    }
    novoJogo = confirm("Deseja iniciar um novo Jogo?");
    alert(`Placar:\nUsuario: ${placarUsuario} Pontos\nComputador: ${placarComputador}`)
    rodada++;
  }
  alert("Você saiu, Fim de Jogo: para jogar novamente atualize a pagina");
} else {
  alert("Fim de jogo!!");
}