import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = (props) => {
  const alterarTitulo = (e) => {
    props.setTitulo(e.target.value);
  }
  const alterarDescricao = (e) => {
    props.setDescricao(e.target.value);
  }

  const alterarImagem = (e) => {
    props.setImagem(e.target.value)
  }

  const alterarAutor = (e) => {
    props.setAutor(e.target.value);
  }
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo"  value={props.titulo} onChange={alterarTitulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.imagem} onChange={alterarImagem}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={alterarDescricao}/>
        </StyledLabel>

        <StyledLabel htmlFor="author">
          Autor Da postagem:
          <Input id="author" value={props.autor} onChange={alterarAutor}/>
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
