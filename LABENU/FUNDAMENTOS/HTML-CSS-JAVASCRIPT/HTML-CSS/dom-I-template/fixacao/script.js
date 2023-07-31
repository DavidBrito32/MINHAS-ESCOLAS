const imprimeNome = () => {
  const recebeTexto = document.querySelector("#texto");
  const recebeNome = document.querySelector("#nome");
  if (recebeNome.value === "" || recebeTexto.value === "") {
    alert("Nao pode ficar vazio");
  } else {
    paragrafo.innerHTML += ` ${recebeNome.value}, ${recebeTexto.value}`;
    recebeTexto.value = "";
    recebeNome.value = "";
    console.log("imprimindo");
  }
};
