import styled from "styled-components";

export const DesignDoCartao = styled.div`
  background-image: linear-gradient(to right, #8F49FF, orangered);
  opacity: 0.8;
  box-shadow: 2px 2px 10px;
  width: 410px;
  height: 260px;
  border-radius: 30px;

  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 30px;
  position: relative;
  margin: 20px 0px 30px 0px;
  opacity: 1;
`;
export const LogoLabenu = styled.img`
  position: absolute;
  width: 210px;
  justify-self: right;
  z-index: 0;
  opacity: 0.6;
`;
export const LogoMasterCard = styled.img`
  width: 80px;
  justify-self: right;
  position: absolute;
  bottom: 0;
  margin: 15px;
  z-index: 2;
`;

export const InfoDoCartao = styled.p`
  color: white;
  grid-column: 1;
  grid-row: 2/3;
  z-index: 2;
`;
export const NumeroDoCartao = styled(InfoDoCartao)`
  font-size: 2rem;
  position: relative;
  z-index: 2;
  text-shadow: 1px 10px 20px yellow;
`;
export const TamanhoDoTexto = styled(InfoDoCartao)`
  font-size: 1.1rem;
  z-index: 2;
`;
export const Nome = styled(TamanhoDoTexto)`
  margin-top: 50px;
  z-index: 2;
`;
export const CVC = styled(TamanhoDoTexto)`
  margin-top: 80px;
  z-index: 2;
`;
export const Validade = styled(TamanhoDoTexto)`
  margin-top: 110px;
  z-index: 2;
`;
export const FormaDePagamento = styled.p`
  font-weight: 600;
  font-size: 1.5rem;
  z-index: 2;
`;
