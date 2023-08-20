import "./ProdutosContainer.scss";
import { ListarProdutos } from "./ListaProdutos";
import Card from "./Card";
import { Selecao } from "../../styles/Styles";

const ProdutosContainer = (props) => {
  const produtosListados = ListarProdutos.filter((item) => item.nomeProduto.toLowerCase().includes(props.search.toLowerCase())
  ).map((item) => (
    <Card nomeProduto={item.nomeProduto} chave={item.id} rate={item.rate} descricao={item.descricao} image={item.image} 
      precoUnitario={item.precoUnitario}
      desconto={item.desconto}
      promo={item.promocao}
    />
  ));

  return (
    <>
      <div className="Produtos">
        <h2>
          Produtos
          <Selecao>
            <option value={1000}>Ate $-1000</option>
            <option value={10000}>De $-1100 a $-10000</option>
          </Selecao>
        </h2>
        <ul>

          {produtosListados}
        </ul>
      </div>
    </>
  );
};

export default ProdutosContainer;
