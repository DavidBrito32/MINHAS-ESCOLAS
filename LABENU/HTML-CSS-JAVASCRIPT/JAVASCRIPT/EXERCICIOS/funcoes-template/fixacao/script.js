// Resolva o Exercício de Fixação!

const comparacao = (nome, anoNasc, anoAtual) => {

    return `Ola, ${nome}, voce ja é maior de idade? ${anoAtual - anoNasc >= 18}!, Voce tem: ${anoAtual - anoNasc} Anos de idade!`;
}

console.log(comparacao("david", 1996, 2023));
console.log(comparacao("Pedro Gabriel", 2010, 2023));
console.log(comparacao("Iudi laurindo", 2009, 2023));


