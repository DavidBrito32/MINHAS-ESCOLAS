function verificaTecla(event){
    if(event.shiftKey){
        mensagem.innerHTML = `ATENCAO SHIFT <strong>PRESSIONADO</strong>`
    }else{
        mensagem.innerHTML = ``
    }
}