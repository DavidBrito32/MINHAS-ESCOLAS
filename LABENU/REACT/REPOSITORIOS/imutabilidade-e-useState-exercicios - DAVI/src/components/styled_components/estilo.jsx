import { styled } from "styled-components";

export const CardPokemon = styled.div`
    width: 350px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid gray;
    overflow: hidden;
    border-radius: 8px;
    background-color: ${props => props.color};

    transition: all ease-in-out 200ms;

        &:hover{
            box-shadow: 1px 5px 20px gray;
            transform: scale(1.01);
        }
`;

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 100px;
`;

export const Imagem = styled.img`
    display: block;
    width: 100%;
    height: 55%;
    object-fit: cover;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    cursor: pointer;
    transition: all ease-in-out 1s;
    transition-delay: 300ms;
`;

export const Lista = styled.ul`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 0 10px;

        strong{
            color: #00fbff;
            font-weight: 100;
        }

        li{
            border-bottom: 0.1rem dashed black;
        }
`;

export const Botao = styled.button`
    width: 100%;
    height: 50px;
    margin-top: 5px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: #430145;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all ease-in-out 200ms;

        &:hover{
            background-color: #8b006f;
        }
`;