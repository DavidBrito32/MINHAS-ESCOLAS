function insereItem(){
    let item = document.querySelector('#meu-input');

    const novoElemento = document.createElement("li");
    if(item.value !== ""){
        novoElemento.innerHTML = item.value;
        lista.insertAdjacentElement("beforeend", novoElemento); 
    }else{
        alert("input vazio");
    }
    item.value = "";   
}