

confirmar.onclick = () =>{
    let age = idade.value;

    if (age > 17){
        alert("Você pode entrar!");
        window.location.href = 'bebidas.html'
    }else{
        alert("Não é permitido");
    }
}


