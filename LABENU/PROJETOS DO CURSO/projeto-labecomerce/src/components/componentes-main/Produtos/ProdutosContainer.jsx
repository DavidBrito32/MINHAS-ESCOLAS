import "./ProdutosContainer.scss";
import { ListarProdutos } from "./ListaProdutos";
import Card from "./Card";
import { Selecao } from "../../styles/Styles";

const ProdutosContainer = (props) => {

  const produtosListados = ListarProdutos.filter((item) =>
    item.nomeProduto.toLowerCase().includes(props.search.toLowerCase())
  ).map((item) => (
    <li key={item.id}>
      <Card
        comprasCarro={props.comprasCarro}
        nomeProduto={item.nomeProduto}
        rate={item.rate}
        descricao={item.descricao}
        image={item.image}
        precoUnitario={item.precoUnitario}
        desconto={item.desconto}
        promo={item.promocao}
        objeto={item}
        carro={props.carro}
      />
    </li>
  ));



  return (
    <>
      <div className="Produtos">
        <h2>
          Produtos
          <Selecao>
            <option value={1000}>De 0 Ate $-1000</option>
            <option value={2000}>De $-1100 a $-10000</option>
          </Selecao>
        </h2>
        <ul>{produtosListados}</ul>

        <a className="pagina" href="#!">
          Ver lista completa
        </a>
      </div>
    </>
  );
};

export default ProdutosContainer;
