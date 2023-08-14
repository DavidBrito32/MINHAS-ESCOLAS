import './Card.scss';

const Card = ({nomeProduto, descricao, image, precoUnitario, desconto, rate, chave}) => {
  return (
    <li key={chave}>
      <div className="produto">
        <div className="imagem">
          <box-icon type="solid" name="heart"></box-icon>
          <span>{rate}</span>
          <img src={image} alt="Produto" />
        </div>
        <h4>{nomeProduto}</h4>
        <p>{descricao}</p>
        <h5>
          $ <strong>{precoUnitario}</strong> -{" "}
          <p>
            <em>$ {desconto}</em>
          </p>
        </h5>
        <a href={"#!"}>
          Adicionar ao carrinho <box-icon name="cart-add"></box-icon>
        </a>
      </div>
    </li>
  );
};

export default Card;
