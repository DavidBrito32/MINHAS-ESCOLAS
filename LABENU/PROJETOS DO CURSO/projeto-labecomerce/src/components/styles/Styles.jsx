import { styled } from "styled-components";

export const BotaoCompra = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 8px;
    background-color: #c4b46d;
    color: red;

        &:hover{
            cursor: pointer;
            background-color: #83794e;
        }

        &:active{
            color: blue;
        }
`;