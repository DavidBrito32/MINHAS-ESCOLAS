import { Link } from "react-router-dom";
import { useFetch } from '../../../hooks/UseFetch'
import {styled} from "styled-components";

const Lista = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    li{
        border: 1px solid gray;
        border-radius: 8px;
        padding: 10px;
        text-align: center;
        margin: 0 auto;
        width: calc(100% / 6);
    }

`;

const Home = () => {

    const url = 'http://localhost:3000/products';

    const { data: items } = useFetch(url);


    return (
        <>
            <Lista>
                {items && items.map((item) => 
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>R$ {item.price}</p>

                        <Link to={`/products/${item.id}`}>Detalhes</Link>

                    </li>
                )}
            </Lista>
        </>
    )
}

export default Home;