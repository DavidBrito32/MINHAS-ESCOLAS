import "./Carrinho.scss";
import ItensCarro from "./itens_do_carrinho/ItensCarro";
import Fechar from "../../../assets-img/icons/botao fechar.png";
import { useEffect, useState } from "react";


const Carrinho = (props) => {


    let novoObj;

    const excluir = (itemId) => {
      alert("Você Excluiu o produto")
      props.abreCarro();
    };
    

    novoObj = props.objeto.map((item, i) => (<li key={i}>
      <ItensCarro
        excluir={(item) => excluir(item.id)}
        classificacao={item.rate}
        category={item.categoria}
        imagem={item.image}
        preco={item.precoUnitario}
        descricao={item.descricao}
        nome={item.nomeProduto}
      />
    </li>));





  const comprar = () => {
    alert(
      `Obrigado Por comprar no Labecomerce! Você será Redirecionado para a pagina do pagamento!`
    );
    props.abreCarro();
  };



  return (
    <>
      <div className={props.carrinho ? "Carrinho active" : "Carrinho"}>
        {" "}
        {/* variavel useState que controla a abertura do carrinho esta vindo do app */}
        <span onClick={props.abreCarro} className="botaoFechar">
          <img src={Fechar} alt="" />
        </span>
        <ul>
          {novoObj}
        </ul>
        <button onClick={comprar} className="Final">
          Finalizar todos
        </button>
      </div>
    </>
  );
};

export default Carrinho;
