import './Carrinho.scss'
import ItensCarro from './itens_do_carrinho/ItensCarro'
import { ListarProdutos } from '../../componentes-main/Produtos/ListaProdutos';
import Fechar from '../../../assets-img/icons/botao fechar.png';

const Carrinho = (props) => {
    const {nomeProduto, precoUnitario, image, descricao, categoria, rate} = ListarProdutos[1];

    const comprar  = () => {
      alert(`Obrigado Por comprar no Labecomerce! Você será Redirecionado para a pagina do pagamento!`);
      props.abreCarro();
    }

  return (
    <>
            <div className={props.carrinho ? "Carrinho active" : "Carrinho"}>

                  <span onClick={props.abreCarro} className='botaoFechar'><img src={Fechar} alt="" /></span>
                
                <ItensCarro classificacao={rate} category={categoria} imagem={image} preco={precoUnitario} descricao={descricao} nome={nomeProduto}  />

                <button onClick={comprar} className='Final'>Finalizar todos</button>

            </div>
    </>
  )
}

export default Carrinho