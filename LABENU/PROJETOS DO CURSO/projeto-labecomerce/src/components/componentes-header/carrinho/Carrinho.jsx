import "./Carrinho.scss";
import ItensCarro from "./itens_do_carrinho/ItensCarro";
import Fechar from "../../../assets-img/icons/botao fechar.png";

const Carrinho = (props) => {
  const novoObjeto = [];
  novoObjeto.push(props.objeto);

  const excluir = () => {
    props.setArmazenaCarro("");
    alert(`produto removido`);
  };

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
          {novoObjeto.map((item, i) => (
            <li key={i}>
              <ItensCarro
                excluir={excluir}
                classificacao={item.rate}
                category={item.categoria}
                imagem={item.image}
                preco={item.precoUnitario}
                descricao={item.descricao}
                nome={item.nomeProduto}
              />
            </li>
          ))}
        </ul>
        <button onClick={comprar} className="Final">
          Finalizar todos
        </button>
      </div>
    </>
  );
};

export default Carrinho;
