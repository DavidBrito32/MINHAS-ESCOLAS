const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const primeiraQuestao = (obj) => {
    const novoObj = {}
    for(let i in infosPessoa){
        novoObj[i] = obj[i].toUpperCase();
    }
    return novoObj; //NÃO ESQUECER O RETURN POR QUE SE NAO A FUNÇÃO NAO RODA;
}

// console.log(primeiraQuestao(infosPessoa));

// 2° QUESTÃO

const impressaoQuestaoUm = (imprimir) => {
    const impressao = ``;

    for(let i in imprimir){
        let propriedade = [i];
        impressao += `O Valor da propriedade ${propriedade[i]} é: ${imprimir[i]}\n`;
    }
    return impressao;
}

console.log(impressaoQuestaoUm(infosPessoa));