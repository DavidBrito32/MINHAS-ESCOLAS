async function listarPokemons(){

                try{
                    let request = await fetch('https://pokeapi.co/api/v2/pokemon/');
                    let response = await request.json();

                    if(!response.results){
                        throw new Error("Erro ao buscar pokémons");
                        return
                    }

                    response.results.forEach(item => {
                        pokedex.innerHTML += `
                            <option>${item.name}</option>
                        `
                    });

                }catch (error){
                    console.log(error.message)
                }
        }