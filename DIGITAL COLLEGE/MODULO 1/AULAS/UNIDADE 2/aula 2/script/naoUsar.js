

let diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for(let i = 1; i <= diasPorMes[0]; i++){
    dia.innerHTML += `<option>${i}</option>`; 
}

mes.onchange = () =>{
    dia.innerHTML = "";
    for(let i = 1; i <= diasPorMes[mes.value]; i++){
        dia.innerHTML += `<option>${i}</option>`; 
    }
}

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

for(let i =0; i < meses.length; i++){
    mes.innerHTML += `<option value="${i}">${meses[i]}</option>`; 
}

const data = new Date;



for(let i = data.getFullYear(); i >= (data.getFullYear() - 100); i--){
    ano.innerHTML += `<option>${i}</option>`; 
}

