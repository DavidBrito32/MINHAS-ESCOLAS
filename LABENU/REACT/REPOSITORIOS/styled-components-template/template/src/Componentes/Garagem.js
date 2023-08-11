import { Carro } from "./Carro";
import { Botao, GaragemContainer, Estacionamento } from "./style";

import imagemCarro from '../img/image 12.png'

export function Garagem(props) {
  return (
    <GaragemContainer>
      <h1>Garagem da {props.nome}</h1>
      <Botao onClick={props.mensagemAprentacao}>Mensagem</Botao>

    <Estacionamento>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"} carro={imagemCarro} />
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"} carro={imagemCarro}  />
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"} carro={imagemCarro} />
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"} carro={imagemCarro} />
    </Estacionamento>
    </GaragemContainer>
  );
}
