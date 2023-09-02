import styled from "styled-components";

export const ContainerForm = styled.form`
    width: 400px;
    height: fit-content;
    border: 2px solid black;
    margin: 100px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 4px;
    background-color: darkslategrey;

        h2{
            width: 100%;
            text-align: center;
            color: goldenrod;
        }

        label{
            width: 95%;
            font-size: 1.1rem;
            font-weight: bolder;
            color: darkkhaki;
        }

        input{
            display: block;
            width: 100%;
            height: 40px;
            border: 1px solid gray;
            border-radius: 8px;
            margin: 10px auto;
            padding-left: 20px;
            outline: none;
            font-size: .8rem;
            font-weight: bolder;
            background-color: #FFFFFF95;

                &::placeholder{
                    font-style: italic;
                    color: gray;
                    font-weight: normal;
                }
        }

        button{
            width: 95%;
            height: 50px;
            border-radius: 8px;
            cursor: pointer;
            margin-bottom: 10px;
            border: 1px solid gray;
            outline: none;
            transition-duration: 100ms;
            font-size: 1.1rem;
            font-weight: bolder;

                &:hover{
                    background-color: saddlebrown;
                    color: white;
                }

                &:active{
                    transform: scale(.97);
                }
        }


`;

export const TelaCadastroEndereco = (props) => {
    
    return (
        <>
            <ContainerForm>
                <h2>Cadastro de endereço</h2>
                <label htmlFor="endereco">
                    Digite seu endereço: (*)
                    <input value={props.inputEndereco} onChange={(e) => props.setInputEndereco(e.target.value)} type='text' name='endereco' id="endereco" placeholder="Rua / Av" />
                </label>
                <label htmlFor="numero">
                    N° da residencia: (*)
                    <input value={props.inputNumeroCasa} onChange={(e) => props.setInputNumeroCasa(e.target.value)} type='number' name="numero" id="numero" placeholder="Numero de sua casa" />
                </label>
                <label htmlFor="complemento">
                    Possui algum complemento?
                    <input type="text" name="complemento" id="complemento" placeholder="Casa / Ap?" />
                </label>
                <label htmlFor="tel">
                    Informe seu telefone: (Cel): (*)
                    <input value={props.inputTelefone} onChange={(e) => props.setInputTelefone(e.target.value)} type="tel" name="tel" id="tel" placeholder="(00) 0 0000 - 0000"  />
                </label>
                <button type="button" onClick={() => props.mudarTela("TelaPrincipal")}>Enviar Informações</button>
            </ContainerForm>
        </>
    )
}