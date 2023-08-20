import { CardPokemon, Imagem, Lista, Botao } from "../styled_components/estilo";
import { useState } from "react";

const PokeCard = ({image, name, weight, evolved, tipo, color, chave}) => {

  const [ev, setEv] = useState(false);

  const Evoluir = () => {
    setEv(!ev);
  }

  return (
    <>
        {ev ? <CardPokemon color={evolved.color}>
        <Imagem src={evolved.image} alt={"Pokemon"} />
        <Lista key={chave}>
            <li>Nome: <strong>{evolved.nome}</strong></li>
            <li>Tipo: <strong>{evolved.tipo}</strong></li>
            <li>Peso:<strong>{evolved.peso}</strong></li>
            <li>Evoluido?: <strong>{ev ? "Sim" : "Não"}</strong></li>
        </Lista>
        <Botao onClick={() => Evoluir()}>Evoluir</Botao>
    </CardPokemon> : <CardPokemon color={color}>
        <Imagem src={image} alt={"Pokemon"} />
        <Lista key={chave}>
            <li>Nome: <strong>{name}</strong></li>
            <li>Tipo: <strong>{tipo}</strong></li>
            <li>Peso:<strong>{weight}</strong></li>
            <li>Evoluido?: <strong>{ev ? "Sim" : "Não"}</strong></li>
        </Lista>
        <Botao onClick={() => Evoluir()}>Evoluir</Botao>
    </CardPokemon>}

    </>
  )
}

export default PokeCard