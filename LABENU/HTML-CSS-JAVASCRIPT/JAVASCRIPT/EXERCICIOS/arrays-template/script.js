//-------------------------------------------//
//-------------------------------------------//
// criar um array com 3 strings dentro
let str = ["David", "Pedro", "Carro"];
//criar um array com 3 numeros dentro;
let number = [17, 03, 1996];
//criar um array com 3 booleanos dentro;
let bool = ["David", 27, false];
//criar um array com apenas um valor
let um = [5];
//criar um array sem valores dentro (void)
let vazio = [];
//-------------------------------------------//
//-------------------------------------------//

//criar um array com 5 numeros;

let copiaNumber = number.slice();

copiaNumber.pop(); //o metodo pop remove somente o ultimo elemento do array

console.log(copiaNumber);//imprimindo com o elemento removido

copiaNumber.push(6);// o push(6) adiciona um elemento ao final do array

console.log(copiaNumber)//imprimindo com o elemento adicionado ao final

copiaNumber.splice(2, 1); //removendo o elemento de indice 2

console.log(copiaNumber)//imprimindo com o elemento removido no indice 2






