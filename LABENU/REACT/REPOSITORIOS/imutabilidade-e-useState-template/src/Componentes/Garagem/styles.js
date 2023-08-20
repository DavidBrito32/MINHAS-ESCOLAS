import styled from 'styled-components'

export const Botao = styled.button`
  border: 0;
  background: green;
  padding: 10px;
  cursor: pointer;
  color: #FF3;
  font-weight: bolder;
  font-style: italic;
`;

export const GaragemContainer = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Titulo = styled.h1`
margin: 100px 0;
  text-align: center;
  color: green;

    strong{
      color: blue;
    }
`;

export const SubTitulo = styled.h2`
    text-align: center;
    color: blueviolet;

      strong{
        color: blue;
      }
`;

export const Estacionamento = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  width: 100%;
  height: 30vh;
  justify-content: center;
  align-items: center;
`;
