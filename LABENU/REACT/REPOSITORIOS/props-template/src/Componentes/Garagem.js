import Carro from "./Carro";

function Garagem(props) {



  return (
    <div>
      <button onClick={() => props.apresentar(props.nome)}>Aperte aqui</button>
      <h1>Garagem de {props.nome}</h1>

      <Carro marca={props.car.marca} ano={props.car.ano} flex={props.car.flex ? "Flex" : "Não é flex"} modelo={props.car.modelo} cor={props.car.cor}/>

    </div>
  );
}

export default Garagem;
