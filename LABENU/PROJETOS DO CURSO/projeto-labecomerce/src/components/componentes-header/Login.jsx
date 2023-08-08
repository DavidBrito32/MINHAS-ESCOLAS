import './Login.scss'
import imagem from '../../assets-img/icons/carrinho de compras.svg'

const Login = (props) => {
  return (
    <div className={props.burguer ? "LoginOptions active" : "LoginOptions"}>

        <button>Login</button>

        <div className='imagem'>
        <a href={'#!'}><img src={imagem} alt="" /></a>
        <div className='circle'>
            <p>2</p>
        </div>
        </div>

    </div>
  )
}

export default Login