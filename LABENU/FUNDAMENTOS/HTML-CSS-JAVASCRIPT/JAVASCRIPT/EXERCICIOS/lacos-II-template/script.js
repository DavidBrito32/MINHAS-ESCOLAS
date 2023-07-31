// --------------- PRÁTICA GUIADA ---------------


const bimestre1 = [10, 4, 3, 8];
const bimestre2 = [8, 9, 7, 6];
const bimestre3 = [8, 4, 5, 2];
const bimestre4 = [5, 6, 7, 9];


const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4];
/*
for(let i = 0; i < notasDoAno.length; i++){
let soma = 0;

  for(let j = 0;j < notasDoAno[i].length; j++){
      soma += notasDoAno[i][j];
  }

  //imprimindo a media dos bimestres um a um
   let media = soma / notasDoAno[i].length;
   console.log(`\nA media do ${i + 1}° Bimestre é: ${media}\n`);
}
*/


//for in

/*

for(let g in notasDoAno){
  let soma = 0;
  for(let k in notasDoAno[g]){
    soma += notasDoAno[g][k];
  }

  let media = soma / notasDoAno[g].length;
  console.log(`\nA media do ${Number(g) + 1}° Bimestre é: ${media}\n`);

}
*/
//for of
/*
for(let notas of notasDoAno) {
  let soma = 0;

  for(let subIndice of notas) {
    soma += subIndice;
  }

  let media = soma / notas.length;
  console.log(`\nA média do ${notasDoAno.indexOf(notas) + 1}° Bimestre é: ${media}\n`);
}
*/
// --------------- EXERCÍCIO DE FIXAÇÃO ---------------


const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for(let i = 0; i < filmes.length; i++){
  console.log(`\n\nTitulo do filme: ${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}\n`);

  for(let j = 0; j < filmes[i].elenco.length; j++){
    console.log(`Ator / Atriz: ${filmes[i].elenco[j]}`)
  }
}



//for in no inicio

for(let i in filmes){
  console.log(`\n\nTitulo do filme: ${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}\n`);

  for(let j in filmes[i].elenco){
    console.log(`Ator / Atriz: ${filmes[i].elenco[j]}`)
  }
}


// for of no segundo loop

for(let i in filmes){

  console.log(`\n\nTitulo do filme: ${filmes[i].titulo}, de ${filmes[i].ano}, e seu diretor: ${filmes[i].diretor}`);

  for(let ator of filmes[i].elenco){
    console.log(`Ator / Atriz: ${ator}`)
  }
}
