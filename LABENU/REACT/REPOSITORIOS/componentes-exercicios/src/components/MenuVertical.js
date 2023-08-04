import './MenuVertical.css'

//import de componentes

const MenuVertical = () => {
    return (
        <>
            <nav>
            <ul>
              <li className="botoes-meunu-vertical"><a href="#!">Início</a></li>
              <li className="botoes-meunu-vertical"><a href="#!">Em alta</a></li>
              <li className="botoes-meunu-vertical"><a href="#!">Inscrições</a></li>
              <hr />
              <li className="botoes-meunu-vertical"><a href="#!">Originais</a></li>
              <li className="botoes-meunu-vertical"><a href="#!">Histórico</a></li>
            </ul>
            </nav>
        </>
    );
}

export default MenuVertical;