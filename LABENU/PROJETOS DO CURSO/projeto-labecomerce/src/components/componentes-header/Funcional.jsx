//import de scss
import { useState } from 'react';
import './Funcional.scss';
import Logo from './Logo';
import SearchBar from './Searchbar';
import Login from './Login';
import Hamburguer from './Hamburguer';


const Funcional = () => {

  const [burguer, setBurguer] = useState(false);

  const ativaMenuBurguer = () => {
    setBurguer(!burguer);
}

  return (
    <>
        <div className="Container">
        <Logo />
        <SearchBar burguer={burguer}/>
        <Login burguer={burguer}/>
        <Hamburguer click={ativaMenuBurguer} burguer={burguer} />
        </div>
    </>
  )
}

export default Funcional