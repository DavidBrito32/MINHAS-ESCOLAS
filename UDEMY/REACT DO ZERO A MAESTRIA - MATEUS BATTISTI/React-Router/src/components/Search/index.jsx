import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../../hooks/UseFetch";
const Search = () => {

  const [searchParams]  = useSearchParams()

  const url = `http://localhost:3000/products?${searchParams}`;

  const { data: items, loading, error } = useFetch(url)

  return (
    <div>
        <h1>Resultados Disponiveis:</h1>

        <ul>
          {loading && <p>Carregando...</p>}
          {error && <p>Obtivemos um erro ao carregar os itens</p>}
        {items && items.map((item) => 
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>

                        <Link to={`/products/${item.id}`}>Detalhes</Link>

                    </li>
                )}
        </ul>
    </div>
  )
}

export default Search