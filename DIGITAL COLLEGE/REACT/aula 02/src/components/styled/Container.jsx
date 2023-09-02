import { styled } from "styled-components";

export const Container = styled.div`
    width: ${(props) => props.width};
    display: flex;
    justify-content: ${props => props.jc};
    align-items: ${props => props.ali};
    justify-content: center;


    @media only screen and (max-device-width: 480px){

    }
`;