import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { TelaCadastroEndereco } from "./components/TelaCadastro/TelaCadastroEndereco/TelaCadastroEndereco";

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
  const [telaAtual, setTelaAtual] = useState("TelaLogin");
  const [inputEmail, setInputEmail] = useState("");
  const [inputSenha, setInputSenha1] = useState("");

  const [inputEndereco, setInputEndereco] = useState("");
  const [inputNumeroCasa, setInputNumeroCasa] = useState("");
  const [inputTelefone, setInputTelefone] = useState("");

  const mudarTela = (novaTela) => {
    setTelaAtual(novaTela)
  }

  const renderizaTela = () => {
    switch (telaAtual) {
      case "TelaLogin":
        return <TelaLogin 
        mudarTela={mudarTela} 
        inputEmail={inputEmail}
        setInputEmail={setInputEmail}
        setInputSenha={setInputSenha1}
        inputSenha={inputSenha}
        />;

      case "TelaCadastro":
        return <TelaCadastro mudarTela={mudarTela} />;

      case "TelaPrincipal":
        return <TelaPrincipal mudarTela={mudarTela} />

      case "TelaEndereco":
        return <TelaCadastroEndereco 
        mudarTela={mudarTela}
        inputEndereco={inputEndereco}
        setInputEndereco={setInputEndereco}
        inputNumeroCasa={inputNumeroCasa}
        setInputNumeroCasa={setInputNumeroCasa}
        inputTelefone={inputTelefone}
        setInputTelefone={setInputTelefone}
        />

      default:
        return <p>Tela inválida</p>
    }
  }

  const InfoUsuario = {
    email: inputEmail,
    senhaUsuario: inputSenha,
    endereco: inputEndereco,
    numeroCasa: inputNumeroCasa,
    telefone: inputTelefone
  }

  console.log(InfoUsuario);

  return (
    <MainContainer >
      <GlobalStyled />

      {renderizaTela()}
    </MainContainer>
  );
}

export default App;