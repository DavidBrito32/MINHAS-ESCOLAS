import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nome, setnome] = useState("");
  const [idade, setidade] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");


  //segundos hooks
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [estadoCivil2, setEstadoCivil2] = useState("");


  const alteraNome = (event) => {
    setnome(event.target.value);
  }

  const alteraIdade = (event) => {
    setidade(event.target.value);
  }
   const imprimirDados = (e) => {
    e.preventDefault();
    console.log(idade, nome, estadoCivil);
  }
    //segunda função

    const alterarEmail = (event) => {
      setEmail(event.target.value);
}

const alterarPassword = (event) => {
  setSenha(event.target.value);
}

const limparInputs = (e) => {
  e.preventDefault();
  setnome("");
  setidade("");
  setEmail("");
  setSenha("");
  setEstadoCivil2("Selecione uma opção"); //select
}

const relacionamento = (e) => {
  setEstadoCivil2(e.target.value);
}



console.log(senha, email, estadoCivil2);

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input value={nome} onChange={alteraNome} />
        </label>
      
        <label>
          E-mail:
          <Input type="email" value={email} onChange={alterarEmail} />
        </label>

        <label>
          Senha:
          <Input type="password" value={senha} onChange={alterarPassword}/>
        </label>

        <label>
          Idade:
          <Input value={idade} onChange={alteraIdade}/>
        </label>

        <label>
          <select value={estadoCivil} onChange={(e) => setEstadoCivil(e.target.value)}>
            <option>Selecione uma opção</option>
            <option>Solteiro(a)</option>
            <option>Casado(a)</option>
            <option>Viúvo(a)</option>
            <option>Divorciado</option>
          </select>
        </label>

        <button onClick={limparInputs}>Enviar dados</button>
      </Form>


    </MainContainer>
  )
}

export default MainPage
