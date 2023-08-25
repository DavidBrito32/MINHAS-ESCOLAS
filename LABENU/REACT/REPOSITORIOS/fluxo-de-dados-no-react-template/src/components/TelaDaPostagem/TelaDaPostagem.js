import React from "react";
import { ContainerPostagem, Title, Image, Description, Autor } from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {
  return (
    <ContainerPostagem>
      <Title>{props.titulo}</Title>
      <Image src={props.imagem} />
      <Autor>{props.autor}</Autor>
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
