/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/UseFetch";

const Product = () => {
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;
  const { data: product, loading, error } = useFetch(url);
  console.log(product);

  return (
    <>
      {error && <p>Ocorreu um erro. contate o responsavel pelo sistema</p>}
      {loading && <p>Carregando....</p>}
      <ul>
        {product && (
          <ul>
            <li>
              <h1>{product.name}</h1>
              <p>RS: {product.price}</p>
            </li>
            <Link to={`/products/${product.id}/info`}>Mais detalhes</Link>
          </ul>
        )}
      </ul>
    </>
  );
};

export default Product;
