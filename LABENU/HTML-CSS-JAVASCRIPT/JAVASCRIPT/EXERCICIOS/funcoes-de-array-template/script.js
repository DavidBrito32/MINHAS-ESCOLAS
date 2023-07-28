const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

/*
const multiplicar = (arraydeNumeros) =>{
  let novoArray = [];
  for(let i = 0; i < arraydeNumeros.length; i++){
    novoArray.push(arraydeNumeros[i] * 3);
  }
  return novoArray;
}

const numeros = [1, 2, 3, 5, 10]



const retornaPares = (arrayDeNumeros) => {
  let novoArray = [];
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 === 0){
      novoArray.push(arrayDeNumeros[i]);
    }
  }
  return novoArray;
}

console.log(retornaPares(numeros));
const fazerOperacoes = (array, callback) => {
  const novoArray = callback(array);
  return novoArray
}

console.log(fazerOperacoes(numeros, multiplicar))

/*-------- UTILIZANDO O MAP ------------*/
/*
function multi(numero){
  return Number(numero) * 3;
}

const triplicaValor = numeros.map(multi);

console.log(`map: ${triplicaValor}`);

*/
/*UTILIZANDO O FILTER*/

// const arrayNumerico = [1, 5, 7, 9, 21, 34, 16, 25];

// const comoFazerOFilter = arrayNumerico.filter((elemento) => {
//   return elemento % 2
// })

// console.log(comoFazerOFilter)


/* EXERCICIOS*/

function novoPoke(poke){
  const novaVida = {
    ...poke,
    vida: poke.vida = 100
  }
  return novaVida;  
}

const pokemonsVidaCheia = pokemons.map(novoPoke);

console.log(pokemonsVidaCheia);

/*USANDO O FILTER*/

const pokeFilter = pokemons.filter((poke) => {
  return poke.tipo === "fogo";
});

console.log(pokeFilter);

