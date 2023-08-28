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
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1);

  switch(tela){
    case 1: 
    return(
      <TelaPrincipal tela={tela} setTela={setTela} />
      )
      case 2:
        return (
          <TelaCadastro tela={tela} setTela={setTela} />
          )
          case 3:
            return (
              <TelaLogin  tela={tela} setTela={setTela}/>              
        )

        default : 
        return(
          <TelaPrincipal tela={tela} setTela={setTela} />
        )
  }


  return (
    <MainContainer >
      <GlobalStyled/>
      {tela}
    </MainContainer>
  );
}

export default App;