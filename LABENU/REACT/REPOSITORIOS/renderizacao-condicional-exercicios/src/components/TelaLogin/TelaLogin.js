import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton
} from "./styled";

function TelaLogin(props) {
  const login = () => {
    // fluxo de login (ainda veremos)
    props.mudarTela("TelaPrincipal");
}

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro");
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel htmlFor="email"> E-mail: </StyledLabel>
        <Input value={props.inputEmail} htmlFor="email" onChange={(e) => props.setInputEmail(e.target.value)} />

        <StyledLabel htmlFor="password">Senha: </StyledLabel>
        <Input value={props.inputSenha} id="password" type={"password"} onChange={(e) => props.setInputSenha(e.target.value)} />

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
