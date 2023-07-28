//alterando o email
const usuario = document.querySelector("#email");
usuario.addEventListener("blur", () => {
  const placeHolderOn = document.querySelector("#email1");
  usuario.style.borderBottom = '2px solid #e87c03';

  if (usuario.value === "") {
    const apareceErro = document.querySelector("#invisivel1");
    apareceErro.style.display = "block";
    const form = document.querySelector('form');
    placeHolderOn.classList.remove('email')

  } else if (usuario.value.includes("@gmail.com")) {

    const apareceErro = document.querySelector("#invisivel1");
    apareceErro.style.display = "none";
    placeHolderOn.classList.toggle('email')
    
  } else {
    const apareceErro = document.querySelector("#invisivel1");
    const form = document.querySelector('form');
    apareceErro.style.display = "block";
    placeHolderOn.classList.toggle('email')
  }
});
//alterando a senha
const senha = document.querySelector("#senha1");
senha.addEventListener("blur", () => {
  const placeHolderOn = document.querySelector("#senha");
  senha.style.borderBottom = '2px solid #e87c03';
    
  if(senha.value === ""){
      const apareceErro = document.querySelector("#oc");
      const form = document.querySelector('form');
      apareceErro.style.display = 'block';
      placeHolderOn.classList.remove('senha');
    }else if(senha.value !== "" && senha.value.length > 4){
        const apareceErro = document.querySelector("#oc");
        apareceErro.style.display = 'none';
        placeHolderOn.classList.add('senha');      
        senha.style.border = 'none' 
    }else if(senha.value !== '' || senha.value.length < 4){
        const apareceErro = document.querySelector("#oc");
        const form = document.querySelector('form');
        placeHolderOn.classList.add('senha');
    }else{
        const apareceErro = document.querySelector("#oc");
        apareceErro.style.display = 'block';
        placeHolderOn.classList.remove('senha');
    }
    
    
});

//aparecendo o texto do saiba mais
const botaoSaibaMais = document.querySelector("#exibeTexto");

botaoSaibaMais.addEventListener('click', () => {
  botaoSaibaMais.style.display = 'none'
    const oculto = document.querySelector('#oculto_novo')
    oculto.style.cssText = "visibility: visible; opacity:1";
})
