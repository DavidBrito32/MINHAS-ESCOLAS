const abrirForm = () => {
    formCriar.classList.add('active');
    overlay.classList.add('active');
}

const fecharForm = () => {
    formCriar.classList.remove('active');
    overlay.classList.remove('active');
    mostrarParticipantes.classList.remove('active');
    fecharFormParticipante.classList.remove('active');
    criarParticipante.classList.remove("active");
}

const participantes = () => {
    mostrarParticipantes.classList.remove('active');
}

fecharParticipante.addEventListener('click', participantes)

let teams = JSON.parse(localStorage.getItem('teams')) || [];



const listarTeams = (id) => {
    listaDeTeams.innerHTML = "";
    if(teams.length > 0){
        for(let i = 0; i < teams.length; i++){
            listaDeTeams.innerHTML += `
            <li>
            <h5> ${teams[i].nome} <box-icon type="solid" name='show' onclick="listarParticipantes(${teams[i].id})"></box-icon></h5>
            <h1>${teams[i].participantes.length} <span>/${teams[i].qtd}</span></h1>
            <div class="acoes">
                <button class="btn mini-title" onclick="modalParticipante(${teams[i].id})">adicionar</button>
                <button id="remover" onclick="deletarTeam(${teams[i].id})" class="btn mini-title"><box-icon name='trash-alt' type='solid' ></box-icon></button>
            </div>
        </li>
        `;
        }
    }else{
        listaDeTeams.innerHTML = `
        <li class="empty">
            Adicione os Teams
        </li>`;
    }
}

listarTeams();

const adicionarTeam = () => {
    event.preventDefault();
    let team = {
        id: (teams.length + 1),
        nome: teamNome.value,
        qtd: teamQtd.value,
        participantes: []
    }
    teams.push(team);
    localStorage.setItem('teams', JSON.stringify(teams));

    fc.reset();

    const overlay = document.querySelector('#overlay');
    const form = document.querySelector('#formCriar');
    fecharForm();
    listarTeams();
}

const deletarTeam = (id) => {
    let confirmacao = confirm(`Deseja Realmente apagar este Item?`);
    if(confirmacao){
        let aux = [];
        for(let i = 0; i < teams.length; i++){
            if(teams[i].id != id){
                aux.push(teams[i]);
            }
        }
        teams = aux;
        localStorage.setItem('teams', JSON.stringify(teams));
        alert(`Item Excluido com Sucesso!`)        
        listarTeams();
    }
}

const listarParticipantes = (id) => {
    mostrarParticipantes.classList.add('active');
    overlay.classList.add('active');
    listaDeParticipantes.innerHTML = "";

    let tem; 

    for(let i = 0; i < teams.length; i++){
        if(teams[i].id === id){
            tem = teams[i];
        }
    }

    for(let i = 0; i < tem.participantes.length; i++){
        listaDeParticipantes.innerHTML += `
        <li>
            ${tem.participantes[i]}  <box-icon name='trash-alt' type='solid'></box-icon>
        </li>
        `
    }
}

const modalParticipante = (id) => {
    criarParticipante.classList.add("active");
    overlay.classList.add("active");
    teamId.value = id;
}

const fecharFormParticipantes = () => {
    criarParticipante.classList.remove("active");
    overlay.classList.remove("active");
}

const adicionarParticipante = () => {
    event.preventDefault();

    for(let i = 0; i < teams.length; i++){
        
        if(teams[i].participantes.length < Number(teams[i].qtd)){
            if(teams[i].id === Number(teamId.value)){
                teams[i].participantes.push(nomeParticipante.value);
            }
        }else{
            alert("Limite de participantes atingido!");
        }
    }

    localStorage.setItem('teams', JSON.stringify(teams));
    fecharForm();    
    listarTeams();
    add.reset();
}

