import {  NavLink } from "react-router-dom"
import { styled } from "styled-components";


const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: left;
  gap: 20px;
  align-items: center;
  padding-left: 30px;

    a{
      color: blue;
        &:hover{
          color: red;
        }

        &.active{
          text-decoration: underline;
          color: #cb8f05;
          background-color: transparent;
        }
    }
`;


const NavBar = () => {
  return (
    <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </Nav>
  )
}

export default NavBar