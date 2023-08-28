/* eslint-disable react/prop-types */
import Butao from '../Butao';
import './index.css'

const Card = ({ titulo, imagem, descricao, categoria}) => {
    return (
        <>
            <div className="card">
                <img src={imagem} alt={titulo} />
                <h3>{titulo}</h3>
                <h6>{categoria}</h6>
                <p>{descricao}</p>
                <Butao titulo={"Saiba Mais"} cor={"#0066FF"} click={() => alert(`Saiba Mais`)} />
                <Butao titulo={"Ler depois"} cor={"#00DDFF"} click={() => alert(`Ler Depois`)} />
            </div>
        </>
    );
}

export default Card;