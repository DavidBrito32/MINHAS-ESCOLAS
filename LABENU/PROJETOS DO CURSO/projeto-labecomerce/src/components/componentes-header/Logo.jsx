import './Logo.scss';

import logo from '../../assets-img/logo/carrinho_de_compras.svg'

const Logo = () => {
  return (
    <div className='Logo'>
        <img src={logo} alt="Logo" />
        <h2>LabeComerce</h2>
    </div>
  )
}

export default Logo;