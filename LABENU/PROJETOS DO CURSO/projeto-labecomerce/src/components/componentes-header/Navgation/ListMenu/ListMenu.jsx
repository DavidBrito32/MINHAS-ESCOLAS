import './ListMenu.scss'

const ListMenu = ({burguer}) => {
  return (
    <div>
              <ul className={burguer ? "ListMenu active" : "ListMenu"}>
                <li><a href={"#!"}>Home</a></li>
                <li><a href={"#!"}>Products</a></li>
                <li><a href={"#!"}>Carrinho</a></li>
                <li><a href={"#!"}>Contact</a></li>
              </ul>

    </div>
  )
}

export default ListMenu