/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { styled } from "styled-components";
import { useFetch } from "./hooks/useFetch";

const Lista = styled.ul`
  margin: 50px auto 0;
  width: 40%;
  border: 2px solid black;
  max-height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  gap: 10px;
  & h3 {
    margin-top: 10px;
    text-align: center;
  }

  & span {
    font-weight: bold;
  }

  & p {
    display: inline;
    color: red;
  }
`;

const Horizontal = styled.div`
  width: 80%;
  height: 5px;
  border-radius: 8px;
  background-color: black;
  margin: 20px auto 0 auto;
`;

const Formulario = styled.form`
  width: 35%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 2px solid black;
  padding: 10px;
  h1{
    text-align: center;
  }

  label {
    width: 100%;
    height: 50px;
    font-weight: bold;

    input {
      display: block;
      width: 100%;
      height: 30px;
      border: none;
      background-color: #6d7c74;
      border-radius: 4px;
      padding-left: 10px;
    }
  }

  button {
    width: 100%;
    height: 35px;
    border-radius: 4px;
    border: none;
    background-color: #887744;
    outline: none;
  }
`;

const App = () => {
  const [products, setProducts] = useState([]);


  const [name, setName] = useState("");
  const [price, setPrice] = useState();

  const url = "http://localhost:3000/products";

  // 1 - resgatando dados

  // useEffect(()=>{
  //   const buscarDados = async () => {
  //     const result = await fetch(url);
  //     const request = await result.json();
  //     setProducts(request);
  //   }
  //   buscarDados();
  // }, []);

  // 5 - Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // 2 - Enviando dados para o servidor

  const HanddleSubmit = async (e) => {
    e.preventDefault();

    if (name !== "" && price > 0) {
      const produto = {
        name,
        price,
      };
      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(produto),
      // });

      // // 3 - Carregamento dinamico de dados
      // const addedProduct = await res.json();
      // setProducts((prevProducts) => [...prevProducts, addedProduct]);

      httpConfig(produto, "POST");

      setName("");
      setPrice("");
    } else {
      alert("Preencha todos os Campos");
    }
  };

  const HanddleDelete = async (id) =>{
    httpConfig(id, 'DELETE');
  }

  return (
    <>
      <Lista>
        <h3>Produtos Cadastrados no sistema</h3>
        {loading && <h3>Carregando Dados....</h3>}
        {error && <p>{error}</p>}
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <span>produto:</span> {item.name} - - <span>valor:</span> R$:{" "}
              <p>{item.price}</p>
              - - -
              <button onClick={() => HanddleDelete(item.id)}>Excluir</button>
            </li>
          ))}
      </Lista>

      <Horizontal></Horizontal>

      <Formulario onSubmit={HanddleSubmit}>
        <h1>Cadastrar Produtos</h1>
        <label htmlFor="Name">
          Digite o nome do produto:
          <input
            type="text"
            name="Name"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          Digite o preço do produto:
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        {loading &&  <button disabled type="button">Aguarde</button> }
        {!loading && <button type="submit">Cadastrar Produto: </button>}
      </Formulario>
    </>
  );
};

export default App;
