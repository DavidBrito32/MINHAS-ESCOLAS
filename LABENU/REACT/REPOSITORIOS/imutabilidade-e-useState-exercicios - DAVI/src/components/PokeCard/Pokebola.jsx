import Pikashu from '../../assets-img/Pokemons/Objeto/pikashu.gif';
import Raishu from '../../assets-img/Pokemons/Objeto/raichu.gif';

import Bubasaur from '../../assets-img/Pokemons/Objeto/bubasaur.gif';
import Ivysaur  from '../../assets-img/Pokemons/Objeto/ivisaur.gif';

import Charizard from '../../assets-img/Pokemons/Objeto/charizard.gif';
import MegaCharizard  from '../../assets-img/Pokemons/Objeto/charizard-evolution.gif';

import Mew from '../../assets-img/Pokemons/Objeto/mew.gif';
import Mewtwo  from '../../assets-img/Pokemons/Objeto/MewTwo.gif';

import Geodune from '../../assets-img/Pokemons/Objeto/genko.gif';
import Onix from '../../assets-img/Pokemons/Objeto/pokémon-onix.gif';


export const Pokebola = [
    {
        id: 1,
        name: "Pikashu",
        color: "#cc9600",
        evolved: {tipo: "Super Eletric", nome: "Raichu", image: Raishu, peso: "32Kg", color: "#6b5004"},
        evolved2: {tipo: "Super Eletric", nome: "Raichu", image: Raishu, peso: "32Kg", color: "#6b5004"},
        evolved3: {tipo: "Super Eletric", nome: "Raichu", image: Raishu, peso: "32Kg", color: "#6b5004"},
        image: Pikashu,
        weight: "20Kg",
        tipo: "Eletrico"
      },
      {
        id: 2,
        name: "Bubasaur",
        color: "#1ea429",
        evolved: {tipo: "floresta", nome: "Ivysaur", image: Ivysaur, peso: "48Kg", color: "#03471a"},
        image: Bubasaur,
        weight: "25Kg",
        tipo: "Grama"
      },
      {
        id: 3,
        name: "Charizard",
        color: "orange",
        evolved: {tipo: "Infernal", nome: "Mega Charizard X", image: MegaCharizard, peso: "250Kg", color: "#023b69cc"},
        image: Charizard,
        weight: "150Kg",
        tipo: "Lava"
      },
      {
        id: 4,
        name: "Mew",
        color: "#a28e96",
        evolved: {tipo: "Neural Psique", nome: "Mewtwo", image: Mewtwo, peso: "90Kg", color: "#79254a"},
        image: Mew,
        weight: "60Kg",
        tipo: "Psique"
      },
      {
        id: 5,
        name: "Geodude",
        color: "#715017",
        evolved: {tipo: "iron stone", nome: "Onix", image: Onix, peso: "90Kg", color: "#6d6962"},
        image: Geodune,
        weight: "60Kg",
        tipo: "rock"
      }
]