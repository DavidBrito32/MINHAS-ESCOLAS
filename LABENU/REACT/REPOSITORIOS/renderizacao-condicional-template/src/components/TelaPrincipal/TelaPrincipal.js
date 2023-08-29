import { Div, Titulo } from "./styled";

function TelaPrincipal(props) {
  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={() => props.mudaTela("cadastro")}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;