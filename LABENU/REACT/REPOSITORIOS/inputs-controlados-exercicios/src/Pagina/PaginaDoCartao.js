import Cartao from "../Componentes/Cartao";
import Formulario from "../Componentes/Formulario";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import { useState } from "react";

function PaginaDoCartao() {
  //declare os estados aqui
  const [numberCard, setNumberCard] = useState("");
  const [nome, setNome] = useState("");
  const [pagamento, setPagamento] = useState("Crédito");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  const LimparDados = (e) => {
    e.preventDefault();
    // setNome("");
    // setNumberCard("");
    // setPagamento("");
    // setValidade("");
    // setCvc("");
    // alert(`Cartão Cadastrado com Sucesso!`)

    if(
      nome !== "" &&
      numberCard !== "" &&
      pagamento !== "" &&
      validade !== "" &&
      cvc !== "" &&
      numberCard.length < 21 &&
      numberCard.length > 10 &&
      cvc.length > 1 &&
      cvc.length < 4
    ) {
      setNome("");
      setNumberCard("");
      setPagamento("");
      setValidade("");
      setCvc("");
      alert(`Cartão Cadastrado com Sucesso!`);
    } else if ((numberCard.length > 3  && numberCard.length < 10) || (numberCard.length > 20)) {
      if (numberCard.length > 3  && numberCard.length < 10) {
        alert("Numero do cartão inválido motivo: (falta numeros)");
      } else if (numberCard.length > 20) {
        alert("Numero do cartão inválido excedeu o limite de digitos");
      }
    } else {
      alert(`Dados incompletos preencher todos os Dados com o -> * <-`);
    }
  };


  //declare as funções de controle de inputs aqui

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numberCard}
        nome={nome}
        cvc={cvc}
        validade={validade}
      />

      {/* Chame o Componente Formulário Aqui */}
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}

      <Formulario
        nome={nome}
        pagamento={pagamento}
        setPagamento={setPagamento}
        alteraNome={setNome}
        cartao={numberCard}
        setNumberCard={setNumberCard}
        validadde={validade}
        setValidade={setValidade}
        cvc={cvc}
        alteraCvc={setCvc}
        LimparDados={LimparDados}
      />
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
