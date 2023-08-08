import './Searchbar.scss'

const Searchbar = (props) => {
  return (
    <div className={props.burguer ? 'Search-Bar active' : 'Search-Bar'}>
        <form>
        <input type="text" placeholder='Search' />
        <a href={'#!'}><i className="fa-solid fa-magnifying-glass"></i></a>
    </form>
    </div>
  )
}

export default Searchbar