// A) CRIANDO UM ARRAY VAZIO
let sacolao =[];


// CRIANDO TRES OBJETOS PARA REPRESENTAR FRUTAS
const fruta1 = {
    nome:'maça', 
    cor:'vermelha', 
    peso: "100 G", 
    marca:'marca1', 
    preco: 1.50,
    disponivel: true,
}

const fruta2 = {
    nome:'banana', 
    cor:'vermelha', 
    peso: "100 G", 
    marca:'marca1', 
    preco: 1.50,
    disponivel: true,
}

const fruta3 = {
    nome:'abacaxi', 
    cor:'verde', 
    peso: "400 G", 
    marca:'marca1', 
    preco: 1.50,
    disponivel: true,
}

// B) ADICIONANDO AO ARRAY OS OBJETOS COM O PUSH

sacolao.push(fruta1);
sacolao.push(fruta2);
sacolao.push(fruta3);

// C) ME CERTIFICANDO QUE OS 3 OBJETOS VAO ESTAR DENTRO DO ARRAY

console.log(sacolao);