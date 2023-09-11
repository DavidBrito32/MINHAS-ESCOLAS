/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";

const Fundo = styled.div`
  width: 100%;
  height: 100vh;  
  &.dark{
    background-color: black;
    color: white;
  }
`;


const Button = ({title}) => {

  const [count, setCount] = useState(0);
    console.log("Renderizou o butao");

    useEffect(() => {
      console.log("renderizou pela dependencia do botao");
    }, [count])

  return (
    <>
        <button onClick={() => setCount(count + 1)}>{title} {count}</button>
    </>
  )
}

const App = () => {
  const [btns, setBtns] = useState([]);

  const addButton = (chave) => {
    setBtns([...btns, <Button key={chave} title={"botão"} />]);
  }

  return (
    <>
        <Fundo>
            <button onClick={addButton}>Add Butão</button>
            {btns.map(item => item)}


        </Fundo>
    </>
  )
}

export default App
