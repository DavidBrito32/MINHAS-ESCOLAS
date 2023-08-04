import logo from '../img/logo.png';

//import de css

import './Header.css'


const Header = () => {

    const mensagem = `David`

    return (
        <>
            <header>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <h1>Olá {mensagem}</h1>
            </header>        
        </>
    )
}

export default Header;