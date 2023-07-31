const pegaValores = () => {
    nome.value;
    endereco.value;
    email.value;

    const valores = [nome.value, endereco.value, email.value];

    nome.value = "";
    endereco.value = "";
    email.value = "";
    console.log(valores)
}

botao.addEventListener("click", pegaValores);