// // Esta funcao realiza algo dps de um certo tempo

// console.log("Teste");

// // setTimeout(()=>{
// //     console.log('Executando depois de 3 segundos')
// // }, 3000)

// let count = 0;
// const time = setInterval(()=>{
//     const divisor = document.querySelector("#tempo");
//     divisor.innerHTML = (`Segundos: ${count++}`)
// }, 1000);

// continuar.addEventListener('click', () => {
//     setInterval(()=>{
//         const divisor = document.querySelector("#tempo");
//         divisor.innerHTML = (`Segundos: ${count++}`)
//     }, 1000);
// })


// parar.addEventListener('click', ()=>{
//    clearInterval(time) 
// })

//codigo do pomodoro

let contarSegundos = 0;
let i_contarSegundos;
let i_contarMinutos;
let contarMinutos;
let contarHora;

pomodoroTime.onkeyup = () =>{
    setarTempo(pomodoroTime.value)
}

pomodoroTime.onclick = () =>{
    setarTempo(pomodoroTime.value)
}

acao.onclick = () => {    
    switch(acao.getAttribute('estado')){
        case 'i':
            acao.setAttribute('estado', 'p'); 
            acao.innerHTML = 'Parar'
            i_contarSegundos = setInterval(()=>{
                contarSegundo()
            }, 1000)
            break;
        
        case 'p':
            acao.setAttribute('estado', 'c'); 
            acao.innerHTML = 'Continuar'
            break;
        
        case 'c':
            acao.setAttribute('estado', 'p'); 
            acao.innerHTML = 'Parar'
            break;
        
    }
}

const setarTempo = (segundo) => {
    if(segundo){
        if(segundo > 59){
            let minuto = parseInt(segundo / 60) % 60;
            segundo = parseInt(segundo % 60); 
            segundos.innerHTML = segundo < 10 ? `0${segundo}`: segundo;
            minutos.innerHTML = minuto < 10 ? `0${minuto}`: minuto;
            contarMinutos = minuto;
            return;
        }
        segundos.innerHTML = segundo < 10 ? `0${segundo}`: segundo;
        contarSegundos = segundo;
    }else{
        minutos.innerHTML = "00";
        segundos.innerHTML = "00"
    }
}

const contarSegundo = () =>{

    if(contarMinutos <= 0){
        if(contarSegundo == 0){
            segundos.innerHTML = "00";
            clearInterval(i_contarSegundos);
            acao.setAttribute('estado', 'i')
            acao.innerHTML = "iniciar";
            return;
        }

    }else{
        if(contarSegundos == 0){
            contarSegundos = 59;
            contarMinutos--;
            minutos.innerHTML = contarMinutos < 10 ? `0${contarMinutos}` : contarMinutos;
            segundos.innerHTML = '59';
        }
    }
        contarSegundos--;
        segundos.innerHTML = contarSegundos < 10 ? `0${contarSegundos}`: contarSegundos;

}

