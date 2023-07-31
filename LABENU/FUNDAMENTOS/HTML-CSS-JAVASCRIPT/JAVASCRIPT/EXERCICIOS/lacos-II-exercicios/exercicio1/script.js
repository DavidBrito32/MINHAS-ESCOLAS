const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
  	let contador = 1;
// for (let numero in array) {
//     console.log(`Jogador ${contador} Marcou: ${array[numero]} Pontos`)
//     contador++;
//   }

  for(let i in array){
    console.log(`Jogador ${contador} Marcou: ${array[i]} Gols`)
    contador++;
  }



// o for of basicamente faz com que a variavel numero receba o contedudo do array em cada interação ele vale o conteudo da rodada atual. ate chegar o ultimo item do array.