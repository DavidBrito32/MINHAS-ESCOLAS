import styled from "styled-components";

export const ContainerPostagem = styled.div`
    width: 100%;
    background-color: #f8f3ee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Title = styled.h2`
    font-size: 2.2rem;
    color: green;
`

export const Image = styled.img`
    border-radius: 8px;
    overflow: hidden;
    margin: 2rem 0;
    object-fit: cover;
`

export const Description = styled.p`
    max-width: 500px;
    padding-top: 1rem;
    text-transform: capitalize;
    font-style: italic;
    font-size: 1.4rem;
`

export const Autor = styled.h3`
    font-family: monospace;
    color: blueviolet;
    width: 45%;
    font-size: 1rem;
    text-align: right;
    position: absolute;
    bottom: 29%;
    font-style: italic;
    text-decoration: underline;
`;

