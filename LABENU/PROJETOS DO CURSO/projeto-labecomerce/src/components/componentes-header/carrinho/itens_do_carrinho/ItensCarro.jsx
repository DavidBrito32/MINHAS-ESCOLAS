import { useState } from "react";
import "./ItensCarro.scss";

const ItensCarro = (props) => {
  const [Variavel, setVariavel] = useState(0);

  const incrementador = () => {
    if (Variavel >= 0) {
      setVariavel(Variavel + 1);
    }
  };

  const decrementador = () => {
    if (Variavel > 0) {
      setVariavel(Variavel - 1);
    } else if (Variavel === 0) {
      alert("Inclua pelo menos um produto");
      setVariavel(1);
    }
  };
  
  return (
    <div className="ItensCarro">
      <div className="Id-produto">
        <div className="imagem">
          <img src={props.imagem} alt="imagem" />
        </div>
        <div className="prd">
          <h1>{props.nome}</h1>
          <h2>
            {props.category} <span>{props.classificacao}</span>
          </h2>
          <p>{props.descricao}</p>
        </div>
      </div>
      <div className="finalizar">
        <div className="quantidade">
          <h4>
            Valor: <span>{props.preco}</span>
          </h4>
          <button onClick={decrementador}>-</button>
          <p>{Variavel}</p>
          <button onClick={incrementador}>+</button>
        </div>

        <div className="compra">
          <a href="#!">Comprar</a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ItensCarro;
