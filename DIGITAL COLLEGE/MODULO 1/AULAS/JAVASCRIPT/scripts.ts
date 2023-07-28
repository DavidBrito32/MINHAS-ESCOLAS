let numero: number; //forma de declaração do tipo da variavel -> usa os : para declarar tipo da variavel

let verdadeiro: boolean; //declaração explicita do tipo da variavel

function boasVindas(nome: string = "Alunos") {
  document.write(`Ola ${nome}`);
}

function soma(numero: number, numero2: number): number {
  return numero + numero2;
}

document.write("O resultado da opecação é:" + soma(24, 25));

function horaExata(): string {
  let hora = new Date();

  return `${hora.getHours()}: ${hora.getMinutes()}`;
}

document.write("a Hora é: " + horaExata());
