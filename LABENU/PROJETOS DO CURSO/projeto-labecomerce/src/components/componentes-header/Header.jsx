import './Header.scss'
import Logo from './Logo/Logo'
import Navigation from './Navgation/Navigation'
import { useState } from 'react'
const Header = () => {
    
    const [burguer, setBurguer] = useState(false);

    const abreBurguer = () => {
        setBurguer(!burguer);
    }



  return (


    <header>
        <Logo />
        <Navigation burguer={burguer} abreBurguer={abreBurguer} />

    </header>
  )
}

export default Header