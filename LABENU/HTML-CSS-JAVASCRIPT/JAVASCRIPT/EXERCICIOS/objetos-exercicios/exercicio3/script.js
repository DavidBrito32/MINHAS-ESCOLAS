const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const ataques = {
    nome: "Investida",
    dano: 40,
    tipo: "normal",
    precisao: 100,
}

// a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.

const copiaPokemon1 = { //aqui fiz somente a copia
    ...pokemon1
}
copiaPokemon1['nome'] = "Squirtle"; //aqui alterei o nome conforme solicitado

//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.

pokemon1['ataques'] = [];
copiaPokemon1['ataques'] = []; //adicionei um array vazio conforme o exercicio pede

// console.log(pokemon1)

//c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`: nome: "Investida",dano: 40, tipo: "Normal", precisao: 100;



pokemon1.ataques.push(ataques);

// console.log(pokemon1.ataques); //imprimindo pra ver se deu certo; e DEU!!!


//d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.

copiaPokemon1.ataques.push(...ataques);
// console.log(copiaPokemon1);

//e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: **“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**

pokemon1.ataques.push({nome: "Folha Navalha", dano: 45, tipo: "Grama", precisao: 100,});

// console.log(pokemon1);//imprimindo pra ver se deu certo; e DEU!!!

//f) Para a cópia, crie o `ataque` **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.

copiaPokemon1.ataques.push({nome: "Jato de Agua", dano: 40, tipo: "Agua", precisao: 100,});

// console.log(copiaPokemon1);//imprimindo pra ver se deu certo; e DEU!!!

//g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.


console.log(pokemon1);

console.log(copiaPokemon1);
