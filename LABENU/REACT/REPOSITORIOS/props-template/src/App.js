import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {

  const carros = [
    {id: 1,marca: "VolksVagen", ano: 2022, flex: true, modelo: "Polo", cor: "Gray"},
    {id: 2,marca: "Ferrari", ano: 2023, flex: true, modelo: "BLACK-ROAD", cor: "Metalic Black"},
    {id: 3,marca: "Chevrolet", ano: 2010, flex: false, modelo: "SPIN", cor: "White"},
    {id: 4,marca: "Fiat", ano: 2020, flex: true, modelo: "UNO", cor: "RED"},
    {id: 5,marca: "BMW", ano: 2023, flex: true, modelo: "X-5", cor: "Canadian Blue"}
  ];

  const apresentaGaragem = (nome) => {
    alert(`Boas vindas a garagem de nome: ${nome}`)
  }
  
  return (
    <div>
      <Garagem car={carros[0]}  nome={"David"} apresentar={apresentaGaragem} />
      <Garagem car={carros[1]}  nome={"Vitas"} apresentar={apresentaGaragem} />
      <Garagem car={carros[2]}  nome={"Brito"} apresentar={apresentaGaragem} />
      <Garagem car={carros[3]}  nome={"Ferrr"} apresentar={apresentaGaragem} />
      <Garagem car={carros[4]}  nome={"Estou Aqui"} apresentar={apresentaGaragem} />
    </div>
  );
}
