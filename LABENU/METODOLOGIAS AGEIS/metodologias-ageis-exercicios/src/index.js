import { match } from "assert";

// EXERCÍCIO 01
export function anoBissexto(ano) {
        // implemente sua lógica aqui
        if(ano < 0){
            return "INVALID"
        }else if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
            return "TRUE"
        }else{
            return "FALSE"
        }            
}


// EXERCÍCIO 02
export function pedraPapelTesoura() {
const opcoes = ["PEDRA", "PAPEL", "TESOURA"];
//const indicaAleatorio = Math.floor(Math.random() * 3);
return opcoes[2];    
}

// EXERCÍCIO 03
export function checkNumeroPrimo(number) {

    if (number < 2) {
        return "INVALID";
      }
    
      // Verifica se o número é divisível por qualquer número de 2 até a raiz quadrada do número
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          return "FALSE";
        }
      }
    
      return "TRUE";
}