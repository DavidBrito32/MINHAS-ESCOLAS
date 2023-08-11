import { styled } from "styled-components";

export const Cabecalho = styled.header`
  background-color: orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 12vh;

  h1 {
    color: white;
    font-size: 3.5rem;
  }

  div {
    width: 50%;
    display: flex;
    align-items: center;
    height: 100%;
    gap: 30px;

    input {
      width: 30rem;
      height: 50px;
      border-radius: 8px;
      border: none;
      outline: none;
      padding-left: 20px;
      font-size: 1.3rem;
    }
  }
`;

export const Search = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: #4697e4;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.1rem;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const Principal = styled.main`
  min-height: 80%;
  display: flex;
`;

export const Navgation = styled.nav`
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
`;

export const MenuVertical = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 10px;
  padding-left: 10px;

  a {
    color: blue;
    font-size: 1.3rem;

    &:hover {
      opacity: 0.8;
      color: black;
    }
  }
`;

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  border: 1px solid black;
  height: 80px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 25%;
    border: 2px solid blue;
  }

  a {
    font-size: 1.5rem;
    color: blue;
    &:hover {
      text-decoration: underline;
      opacity: 0.7;
    }
  }
`;

export const PainelVideos = styled.section`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;

export const CardVideoTag = styled.div`
  h4 {
    margin-left: 20px;
  }
`;

export const Footer = styled.footer`
  background: #333b3e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
`;
