// Esta função realiza algo depois de X tempo

// setTimeout(() => {
//     alert("Team cadastrado")
// }, 500)

// Esta função realiza algo a cada X tempo

// let count = 0;
// const timer = setInterval(() => {
//     count++;
//     document.querySelector('#tempo').innerHTML = `Segundos: ${count}`;
// }, 1000);

// pararTempo.onclick = () => {
//     clearInterval(timer);
// }
// continuarTempo.onclick = () => {
//     setInterval(() => {
//         count++;
//         document.querySelector('#tempo').innerHTML = `Segundos: ${count}`;
//     }, 1000);
// }

// setInterval(() => {
//     count = 0;
//     document.querySelector('body').innerHTML = `Segundos: ${count}`;
// }, 11000);

//codigo do pomodoro

let p_segundos = 0;
let p_minutos = 0;
let p_horas = 0;
let i_contarSegundos;
let i_contarMinutos;
let progressoSegundo = 266 / 59;


pomodoroTime.onkeyup = () => {
    setarTempo(pomodoroTime.value);
}

pomodoroTime.onclick = () => {
    setarTempo(pomodoroTime.value);
}

acao.onclick = () => {
    switch(acao.getAttribute('estado')){
        case 'i':
            acao.setAttribute('estado', 'p');
            acao.innerHTML = 'Parar';
            i_contarSegundos = setInterval(() => {
                contarSegundos();
            }, 1000);
        break;
        case 'p':
            acao.setAttribute('estado', 'c');
            acao.innerHTML = 'Continuar';
        break;
        case 'c':
            acao.setAttribute('estado', 'p');
            acao.innerHTML = 'Parar';
        break;
    }   
}

function setarTempo(segundos){
    // verifica se segundos é um numero valido
    if(segundos){
        // verifica se segundos é maior que 59
        if(segundos > 59){
            //caso seja, fazemos o calculo para definir segundos e minutos
            let minutos = parseInt((segundos / 60) % 60);
            segundos = parseInt(segundos % 60);
            //ternario para checar se minutos é menor que 10, caso seja, adiciona 0 na frente
            minuto.innerHTML = minutos < 10 ? `0${minutos}` : minutos;
            //atribuindo minutos a uma variavel global
            p_minutos = minutos;
            //ternario para checar se segundos é menor que 10, caso seja, adiciona 0 na frente
            segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
            tempoCorrido.style.width = (p_segundos * progressoSegundo) + 'px';
            //atribuindo segundos a uma variavel global
            p_segundos = segundos;
            return;
        }
        //ternario para checar se segundos é menor que 10, caso seja, adiciona 0 na frente
        segundo.innerHTML = segundos < 10 ? `0${segundos}` : segundos;
        tempoCorrido.style.width = (p_segundos * progressoSegundo) + 'px';
        //atribuindo segundos a uma variavel global
        p_segundos = segundos;
    }else{
        minuto.innerHTML = '00';
        segundo.innerHTML = '00';
    }
}



function contarSegundos(){
    if(p_minutos <= 0){
        if(p_segundos == 0){
            segundo.innerHTML = '00';
            clearInterval(i_contarSegundos);
            acao.setAttribute('estado', 'i');
            acao.innerHTML = 'iniciar';
            return;
        }
    }else{
        if(p_segundos == 0){
            p_segundos = 59;
            p_minutos--;
            minuto.innerHTML = p_minutos < 10 ? `0${p_minutos}` : p_minutos; 
            segundo.innerHTML = '59'; 
            return;
        }
    }
    p_segundos--;
    tempoCorrido.style.width = (p_segundos * progressoSegundo) + 'px';
    segundo.innerHTML = p_segundos < 10 ? `0${p_segundos}` : p_segundos; 
}
