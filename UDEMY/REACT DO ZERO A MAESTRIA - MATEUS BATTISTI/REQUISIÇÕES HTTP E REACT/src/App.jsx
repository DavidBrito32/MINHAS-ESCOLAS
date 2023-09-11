/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react"
import {useFetch} from './hooks/useFetch';

useState
function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const url = 'http://localhost:3000/products';
  // custon hook
  const {data: items, httpConfig} = useFetch(url);

  //adição de products a API
  // const enviaForm = async (e) => {
  //   e.preventDefault();
  //   const produto = {
  //     name,
  //     price
  //   }

  //   const rest = await fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': "application/json"
  //     },
  //     body: JSON.stringify(produto)
  //   });
  //   const addedProduct = await rest.json();

  //   setProducts((prevProducts) => [...prevProducts, addedProduct]);    
  //     setName("");
  //     setPrice("");
  // }

  httpConfig(products, "POST");

  return (
    <>       

      <ul>
        <h1>Produtos disponiveis</h1>
        {items && items.map((item) => {
         return <li key={item.id}>
          Produto:{item.name} <br />
          Preço: {item.price}          
          </li>
        })}
      </ul>

      <form onSubmit={enviaForm}>

        <label htmlFor="Name">
          Informe seu nome:
          <input type="text" name="Name" id="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label htmlFor="Price">
          Informe o preço:
          <input type="number" name="Price" id="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>

        <input type="submit" value="Enviar" />

        



      </form>


    </>
  )
}

export default App
