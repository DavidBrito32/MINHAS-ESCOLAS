/* eslint-disable no-unreachable */
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState();

  const mudaTela = (screen) => {
    setTela(screen);
  };

  // switch (tela) {
  //   case "login":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //        <TelaLogin mudaTela={mudaTela} />;
  //       </MainContainer>
  //     );

  //   case "cadastro":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //        <TelaCadastro mudaTela={mudaTela} />;
  //       </MainContainer>
  //     );

  //   case "home":
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //        <TelaPrincipal mudaTela={mudaTela} />;
  //       </MainContainer>
  //     );


  //   default:
  //     return (
  //       <MainContainer>
  //         <GlobalStyled />
  //        <TelaLogin mudaTela={mudaTela} />;
  //       </MainContainer>
  //     );
  // } 
  
  if(tela === "login"){
    return (
      <MainContainer>
        <GlobalStyled />
       <TelaLogin mudaTela={mudaTela} />;
      </MainContainer>
    );
  }
  
  if(tela === "cadastro"){
    return (
      <MainContainer>
        <GlobalStyled />
       <TelaCadastro mudaTela={mudaTela} />;
      </MainContainer>
    );
  }

  if(tela === "home"){
    return (
      <MainContainer>
        <GlobalStyled />
       <TelaPrincipal mudaTela={mudaTela} />;
      </MainContainer>
    );
  }else{
    return (
      <MainContainer>
        <GlobalStyled />
       <TelaLogin mudaTela={mudaTela} />;
      </MainContainer>
    );
  }

  
}

export default App;
