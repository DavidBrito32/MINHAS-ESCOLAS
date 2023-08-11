import './Navigation.scss'
import Burguer from './MenuHamburguer/Burguer';
import ListMenu from './ListMenu/ListMenu';
import Search from './Search/Search';

const Navigation = ({burguer, abreBurguer}) => {
  return (
    <>

        <Search burguer={burguer} />
        <Burguer burguer={burguer} abreBurguer={abreBurguer} />
        <ListMenu burguer={burguer}/>

    </>
  )
}

export default Navigation