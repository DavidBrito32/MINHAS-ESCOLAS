const input = document.querySelector("#lembre");

const exibe = () => {
  if ((input.value = "checked")) {
    const ativar = document.querySelector("#ativar");
    ativar.classList.toggle("checked");
  }
};

input.addEventListener("click", exibe);

//exibindo o texto do saiba mais

const exibeTexto = document.querySelector('#abrir');

exibeTexto.addEventListener('click', () => {
  let textos = document.querySelector('.oculto');
      textos.style.display = 'block'
})
