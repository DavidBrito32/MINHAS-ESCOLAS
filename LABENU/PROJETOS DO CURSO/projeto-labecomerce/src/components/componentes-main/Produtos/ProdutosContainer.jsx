import "./ProdutosContainer.scss";
import { ListarProdutos } from "./ListaProdutos";
import Card from "./Card";
import { Selecao } from "../../styles/Styles";
import { useState } from "react";

const ProdutosContainer = (props) => {

  const [valor, setValor] = useState();

  const FormataMoeda = (valor) => {
      if(valor > 0){
        let numberFormat = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(valor);
        return numberFormat;
      }
  }


  const filtroValor = (e) => {
    setValor(e.target.value)
  } 

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
        precoUnitario={FormataMoeda(item.precoUnitario)}
        desconto={FormataMoeda(item.desconto)}
        promo={item.promocao}
        objeto={item}
        carro={props.carro}
      />
    </li>
  ));

  
  const select = ListarProdutos.filter((item) => (item.precoUnitario < valor) || (item.promocao && valor) ).map((item) => 
    <li key={item.id}>
      <Card
        comprasCarro={props.comprasCarro}
        nomeProduto={item.nomeProduto}
        rate={item.rate}
        descricao={item.descricao}
        image={item.image}
        precoUnitario={FormataMoeda(item.precoUnitario)}
        desconto={FormataMoeda(item.desconto)}
        promo={item.promocao}
        objeto={item}
        carro={props.carro}
      />
    </li>
  )



  return (
    <>
      <div className="Produtos">
        <h2>
          Produtos
          <Selecao onChange={(e) => filtroValor(e)}>
            <option value={"true"}>Promoção</option>
            <option value={250}>De 0 até $-250</option>
            <option value={500}>Ate $-500</option>
            <option value={1000}>De 0 Ate $-1000</option>
            <option value={10000}>até $-10.000</option>
            <option value={30000}>até $- 30.000</option>
          </Selecao>
        </h2>
        <ul>{select.length > 0 ? select : produtosListados}</ul>

        <a className="pagina" href="#!">
          Ver lista completa
        </a>
      </div>
    </>
  );
};

export default ProdutosContainer;
