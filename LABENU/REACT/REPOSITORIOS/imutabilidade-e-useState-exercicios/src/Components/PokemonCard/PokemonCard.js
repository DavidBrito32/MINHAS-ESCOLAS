import { CardPokemon } from "../../styles/styles";
const PokemonCard = ({name, type, evolved, weight, color, image, id}) => {

    // const evoluirPokemon = () => {
    //     console.log("Cliquei no botão de evoluir")
    // }
    
  return (

    <>
      <CardPokemon>
          <ul>
            <img src={image} alt={name} />
            <li>Nome: {name}</li>
            <li>Tipo: {type}</li>
            <li>Peso: {type}</li>
          </ul>
      </CardPokemon>
    </>

  )
}

export default PokemonCard;