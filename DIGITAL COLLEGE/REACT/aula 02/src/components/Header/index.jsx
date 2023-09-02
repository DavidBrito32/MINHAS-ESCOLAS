import { styled } from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #7e0184;

    nav{
        width: 100%;
        height: 100%;
         ul{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 36px;

                a{
                    display: block;
                    line-height: 46px;
                    color: white;
                }
         }
    }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;
