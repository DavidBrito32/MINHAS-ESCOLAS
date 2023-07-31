// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
       return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    /*
    USANDO O REVERSE ERA SO FAZER ISSO:
    ARRAY.REVERSE(); // E PRONTO! BESTA NÉ?
    */
    let novoArray = [];
    for(let i = 0; i < array.length; i++){
        novoArray.push(array[array.length - 1 - i]);
    }
    return novoArray;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let sorted;
    //UTILIZANDO O METODO SORT
    /*
    sorted = array.sort((a, b) => {
        if(a < b){
            return -1;
        }else if(a > b){
            return 1;
        }else{
            return 0;
        }
    });
    */
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
      return array;

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = [];
    //UTILIZANDO O FILTER
    /*
  const parOuImpar = array.filter((num) => {
    return num % 2 === 0;
  })
  return parOuImpar;
  */
//UTILIZANDO O FOR
for(let j = 0; j < array.length; j++){
    if(array[j] % 2 === 0){
        novoArray.push(array[j]);
    }
}
    console.log(novoArray)
    return novoArray;

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    /*SEM USAR O FILTER*/
    /*
    const numerosElevados = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            numerosElevados.push(array[i] ** 2);
        }
    }
    return numerosElevados;
    */
   //UTILIZANDO O FILTER
   const numerosElevados = array.filter((num) => {
    return num % 2 ===0;
}).map((num) => {
    return num ** 2;
})

return numerosElevados;

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = array[0]; // Atribuir o primeiro elemento como valor inicial

    // Percorrer o array e comparar cada elemento com o valor atual de maiorNumero
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maiorNumero) {
        maiorNumero = array[i]; // Atualizar maiorNumero se encontrarmos um número maior
      }
    }
  
    return maiorNumero; // Retornar o maior número encontrado
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const resultado = {};

    if(num1 > num2){
        //OBS: ESTOU UTILIZANDO A NOTAÇÃO DE COCHETES PRA TREINAR ESTA NOTAÇÃO DOS OBJ
        resultado['maiorNumero'] = num1;
        resultado['maiorDivisivelPorMenor'] = num1 % num2 === 0;
        resultado['diferenca'] = num1 - num2;
    }else{
        resultado['maiorNumero'] = num2;
        resultado['maiorDivisivelPorMenor'] = num2 % num1 === 0;
        resultado['diferenca'] = num2 - num1;
    }
    return resultado;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const numerosPares = [];

    let contador = 0;
    let numeroAtual = 0;
  
    while (contador < n) {
      if (numeroAtual % 2 === 0) {
        numerosPares.push(numeroAtual);
        contador++;
      }
      numeroAtual++;
    }
  
    return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero';
      } else if ((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)) {
        return 'Isósceles';
      } else {
        return 'Escaleno'; //JA QUE AS CONDIÇÕES ANTERIORES FORAM FALSAS SERA,ESCALENO (pois nenhum lado é igual)
      }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    for (let i = 0; i < array.length; i++) { //ordenando os elementos do array
        for (let j = 0; j < array.length - i - 1; j++) {
          if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }

      let menorEMaior = []
      menorEMaior[1] = array[1];
      menorEMaior[0] = array[array.length -2];

      return menorEMaior


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {
        nome: "ANÔNIMO",
        idade: pessoa.idade,
        endereco: pessoa.endereco,
        email: pessoa.email
      };        
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    return pessoas.filter((pessoa) => {
        const alturaMinima = 1.5; // 1.5m
        const idadeMinima = 14;
        const idadeMaxima = 60;        
        return (pessoa.altura >= alturaMinima && pessoa.idade > idadeMinima && pessoa.idade < idadeMaxima);
      });
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        const alturaMinima = 1.5; // 1.5m
        const idadeMinima = 14;
        const idadeMaxima = 60;  
             
        return (pessoa.altura < alturaMinima || pessoa.idade <= idadeMinima || pessoa.idade > idadeMaxima);
      });
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        const valorTotalCompras = conta.compras.reduce(
          (total, compra) => total + compra, 0);

        conta.saldoTotal -= valorTotalCompras;
        conta.compras = [];
      });
    
      return contas;
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => {
        const nomeA = a.nome.toUpperCase();
        const nomeB = b.nome.toUpperCase();
    
        if (nomeA < nomeB) {
          return -1;
        }
        if (nomeA > nomeB) {
          return 1;
        }
        return 0;
      });
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  
}
