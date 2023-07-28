let num = Number(prompt("Digite um numero para exibir sua taboada: "));

let taboada = [];

for(let j =1;j <= 10; j++){
    taboada[j] = j;
}


for(let i in taboada){
    console.log(`${num} x ${i} = ${num * taboada[i]}`);
}

//taaaa poura dificil prefiro mil vezes meu for tradicional

