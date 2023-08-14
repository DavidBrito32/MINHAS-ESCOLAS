import './Search.scss'

const Search = ({burguer}) => {
  return (
    <div className={burguer ? "Search active" : "Search"}>
        <input type="text" placeholder='Pesquisar Produto'/>
        <a href={"#!"}><i className="fa-solid fa-magnifying-glass"></i></a>
    </div>
  )
}

export default Search