//imports de components
import { Pokebola } from './components/PokeCard/Pokebola';
//import css
import PokeCard from './components/PokeCard/PokeCard';
import './styles/App.scss';
import { Container } from './components/styled_components/estilo';

function App() {

  return (
    <>
      <Container>

            <PokeCard name={Pokebola[0].name} color={Pokebola[0].color} evolved={Pokebola[0].evolved} image={Pokebola[0].image} weight={Pokebola[0].weight} tipo={Pokebola[0].tipo} chave={Pokebola[0]}/>

            <PokeCard name={Pokebola[1].name} color={Pokebola[1].color} evolved={Pokebola[1].evolved} image={Pokebola[1].image} weight={Pokebola[1].weight} tipo={Pokebola[1].tipo} chave={Pokebola[1]}/>

            <PokeCard name={Pokebola[2].name} color={Pokebola[2].color} evolved={Pokebola[2].evolved} image={Pokebola[2].image} weight={Pokebola[2].weight} tipo={Pokebola[2].tipo} chave={Pokebola[2]}/>

            <PokeCard name={Pokebola[3].name} color={Pokebola[3].color} evolved={Pokebola[3].evolved} image={Pokebola[3].image} weight={Pokebola[3].weight} tipo={Pokebola[3].tipo} chave={Pokebola[3]}/>

            <PokeCard name={Pokebola[4].name} color={Pokebola[4].color} evolved={Pokebola[4].evolved} image={Pokebola[4].image} weight={Pokebola[4].weight} tipo={Pokebola[4].tipo} chave={Pokebola[4]}/>


            {/* {"//Usando o map"}; */}
            {/* {Pokebola.map(item => 
              <PokeCard name={item.name} color={item.color} evolved={item.evolved} image={item.image} weight={item.weight} tipo={item.tipo} chave={item.id}/>
            ) } */}



      </Container>
    </>
  );
}

export default App;
