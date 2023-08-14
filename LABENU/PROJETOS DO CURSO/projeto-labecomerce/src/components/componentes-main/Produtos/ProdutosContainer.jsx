import "./ProdutosContainer.scss";

import { ListarProdutos } from './ListaProdutos';
import Card from "./Card";

const ProdutosContainer = () => {
  const prod = ListarProdutos;

  return (
    <>
      <div className="Produtos">
        <h2>
          Produtos{" "}
          <select>
            {prod.map(item => <option key={item.id} >{item.categoria}</option>) }
          </select>
        </h2>

        <ul>
            {prod.map(item => <Card nomeProduto={item.nomeProduto} chave={item.id} rate={item.rate} descricao={item.descricao} image={item.image} precoUnitario={item.precoUnitario} desconto={item.desconto} />)}
        </ul>
      </div>
    </>
  );
};

export default ProdutosContainer;
