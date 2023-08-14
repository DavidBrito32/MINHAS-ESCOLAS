import './BannerInicial.scss'
import imagem from '../../../assets-img/banner/banner labecomerce.png';
import imagem2 from '../../../assets-img/banner/banner labecomerce 2.png';
import imagem3 from '../../../assets-img/banner/banner 3 labecomerce.png';
import { BotaoCompra } from '../../styles/Styles';

const BannerInicial = () => {
  return (
    <>

        <div className='Container'>
        <div className="imagem">
          <h2>Special Edition</h2>
          <p>Descubra a Verdadeira Exclusividade com os Tênis Eclipsia.
            Cada par é uma edição limitada, refletindo estilo e singularidade únicos. Sinta a diferença a cada passo. Seja exclusivo, seja Eclipsia.</p>
          <img src={imagem} alt="" />
            <button>Adicionar ao carrinho</button>
        </div>

        </div>
    </>
  )
}

export default BannerInicial;