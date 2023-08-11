import styled from "styled-components";

export const Botao = styled.button`
    margin: 0 auto;
    display: block;
    width: 150px;
    height: 30px;
    background-color: blue;
    color: white;

        &:hover{
            cursor: pointer;
            background-color: red;
        }
`;

export const GaragemContainer = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: gray;
    text-align: center;
`;

export const Estacionamento = styled.section`
    margin: 0 auto;
    width: 30%;
    height: 550px;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
    grid-gap: 2rem;
`;

export const CarroImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 200px;
    height: 150px;
`;

export const Lista = styled.ul`
    width: 100%;
    text-align: left;
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr;
`;

export const ContainerCaro = styled.div`
    width: 250px;
    height: 250px;
    background-color: orange;
    text-align: center;
    border-radius: 8px;

        h2{
            font-family: fantasy;
            font-weight: 100;
        }
`;

export const Add = styled.button`
    width: 70px;
    height: 20px;
    background-color: gray;
    color: red;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;

`;