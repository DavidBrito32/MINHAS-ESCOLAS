import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ContainerHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 6.5rem;

  & .buscar {
    flex: 1;
    input {
      width: 100%;
    }
  }

  & nav {
    width: 100%;
    & ul {
      width: 100%;
      display: flex;
      gap: 32px;
    }
  }
`;

const Header = () => {
  return (
    <>
      <ContainerHeader>
        <div className="logo">Logo</div>
        <div className="buscar">
          <input type="text" placeholder="Pesquisar produto" />
        </div>
        <div className="acoes">
          <Link to="/cadastro">Cadastre-se</Link>
          <Link to="/login">Entrar</Link>
          <h6>Carrinho</h6>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Produtos</Link>
            </li>
            <li>
              <Link to="/categorias">Categorias</Link>
            </li>
            <li>
              <Link to="/meus-pedidos">Meus Pedidos</Link>
            </li>
          </ul>
        </nav>
      </ContainerHeader>
    </>
  );
};

export default Header;
