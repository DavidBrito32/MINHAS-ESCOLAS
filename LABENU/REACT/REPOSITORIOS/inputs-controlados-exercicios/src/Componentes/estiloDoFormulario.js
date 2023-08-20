//Declare o estilo do fomulário aqui
import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #668d0465;
  color: #640a05;
  font-size: 1.3rem;
  border-radius: 18px;
  padding: 20px;
  -webkit-box-shadow: -1px 0px 53px 11px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: -1px 0px 53px 11px rgba(0, 0, 0, 0.36);
  box-shadow: -1px 0px 53px 11px rgba(0, 0, 0, 0.36);
  label {
    font-weight: bolder;
  }

  position: relative;

`;

export const Input = styled.input`
  display: block;
  width: ${(props) => props.width};
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  background-color: #cfcece45;
  color: black;
  font-weight: bold;
  padding-left: 20px;
  margin: 10px 0;

`;

export const Select = styled.select`
  width: ${(props) => props.width};
  height: 50px;
  background-color: #cfcece55;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bolder;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin: 0 auto;
  color: blue;
`;

export const Botao = styled.button`
  width: 100%;
  height: 4rem;
  background-color: orange;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  font-style: italic;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  border: 2px inset black;
  transition: all ease 100ms;

  &:hover {
    border: 2px outset white;
    background-color: #ff4900;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const Flutuante = styled.span`
  position: absolute;
  right: 110px;
  top: 35px;
  font-size: 2rem;
  font-weight: bold;
  
`;
