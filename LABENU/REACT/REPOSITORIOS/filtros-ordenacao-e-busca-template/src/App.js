import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {

  const [idFilter, setIdFilter] = useState("");
  const [nomeFilter, setNomeFilter] = useState("");
  
  const modificaID = idFilter > 10 ? `0${idFilter}` : `00${idFilter}`;


  return (
    <>
      <GlobalStyle />
      <Header idFilter={idFilter} setIdFilter={setIdFilter} nomeFilter={nomeFilter} setNomeFilter={setNomeFilter} />
      <CardsContainer>
        {pokemons
        .filter((item) => {
          if(idFilter !== ""){
            return item.id === modificaID;
          }else{ return pokemons}
        })
        .filter((item) => {
          if(item.name === ""){
            return item
          }else{
            return item.name.english.toLowerCase().includes(nomeFilter.toLowerCase())
          }
        })
        .map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App;
