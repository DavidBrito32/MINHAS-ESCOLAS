import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import {useState} from 'react';

export default function App() {

  const obj =[
    {id: 1,
     modelo:"BMW",
     cor:"Gray",
     flex: true,
     adicionado: "Juliana",
     ano: 2015
    },
    {id: 2,
     modelo: "Ferrari",
     cor: "Black",
     flex: true,
     adicionado:"Amancio",
     ano: 2020
    },
    {id: 3,
     modelo:"Ford Focus",
     cor: "Marfin",
     flex: false,
     adicionado:"Gilderlan",
     ano: 2019
    },
    {id: 4,
     modelo:"Ford Focus",
     cor: "Marfin",
     flex: false,
     adicionado:"Gilderlan",
     ano: 2019
    }
  ]

  let [controle, setControle] = useState(true);
  let [cont, setCont] = useState(0);

  const [nome, setNome] = useState("David");
  const [veiculo, setVeiculo] = useState({
      modelo: "------",
      cor: "-----",
      ano: "----",
      flex: false,
      Adicionado: "----"
  })    
  const veiculo01 = () => {
    setVeiculo(obj[0]);
    setNome('Alves')
  }
  const veiculo02 = () => {
    setVeiculo(obj[1]);
    setNome('Gordon')
  }
  const veiculo03 = () => {
    setVeiculo(obj[2]);
    setNome('Guaxinin')
  }

  const alteraVeiculo = () => {

  }
  
  return (
    <div className="App">
      <GlobalStyled />
      <Garagem controle={controle} carro={veiculo} nome={nome}/>


    </div>
  )
}
