import { Div, Titulo } from "./styled";

function TelaPrincipal(props) {
  const deslogar = () => {
    // validação de logout ainda será visto mais pra frente no curso
    props.setTela(2);
  }

  return (
      <Div>
          <Titulo>Tela Principal</Titulo>
          <p>Boas-vindas à aplicação!</p>
          <button onClick={deslogar}>Deslogar</button>
      </Div>
  )
}

export default TelaPrincipal;