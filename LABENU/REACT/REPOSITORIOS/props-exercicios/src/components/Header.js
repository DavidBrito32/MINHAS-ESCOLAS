import './Header.css'
const Header = () => {
    return(
        <>
        <header>
          <h1>LabeTube</h1>
            <div>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            <button>Pesquisar</button>
            </div>
        </header>
        </>
    )
}

export default Header;