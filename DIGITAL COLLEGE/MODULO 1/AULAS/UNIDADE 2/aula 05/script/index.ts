type RegiaoProps = {
    id: number,
    sigla: string,
    nome: string
}

type EstadoProps = {
    id: number,
    sigla: string,
    nome: string,
    regiao?: string
}




let listaDeEstados: EstadoProps[] = [];


function listarEstados() {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then((lista: EstadoProps[])  => {
        lista.forEach(item => {
            //@ts-ignore
            estado.innerHTML += `
            <option value='${item.sigla}'>${item.sigla} - ${item.nome.toUpperCase()}</option>
            `;
        });
    })
    .catch(error => {
        alert("Erro ao buscar os estados")
    })
    //@ts-ignore
    .finally(() => {
        console.log("Terminou Tudo");
    })
}

listarEstados();

async function buscaCEP(){
    //@ts-ignore
    if(cep.value.length == 8){

        try{
            //@ts-ignore
            let request = await fetch(`http://viacep.com.br/ws/${cep.value}/json/`)
            let response = await request.json();

            if(response.erro){
                alert("CEP INVALIDO")
            }

            //@ts-ignore
            logradouro.value = response.logradouro;
                        //@ts-ignore
            bairro.value = response.bairro;
                        //@ts-ignore
            localidade.value = response.localidade;
                        //@ts-ignore
            estado.value = response.uf;
            
        }catch (error){
            console.log(error.message);
            
        }
    }
}