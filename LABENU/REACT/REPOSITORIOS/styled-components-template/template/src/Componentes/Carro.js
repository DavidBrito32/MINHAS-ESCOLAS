import { CarroImg, Lista,  Add, ContainerCaro } from "./style";

export function Carro(props) {
    return (
      <ContainerCaro>
        <h2>Meu carro</h2>
        <CarroImg src={props.carro}></CarroImg>
        <Lista>
          <li>Cor: <strong>{props.cor}</strong></li>
          <li>Ano: <strong>{props.ano}</strong></li>
          <li>Flex: <strong>{props.flex}</strong></li>
          <Add>Adicionar</Add>
        </Lista>
      </ContainerCaro>
    );
  }
  
