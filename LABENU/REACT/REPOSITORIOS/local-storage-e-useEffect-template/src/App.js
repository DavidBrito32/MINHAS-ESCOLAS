/* eslint-disable no-restricted-globals */
import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState([]
  );

  useEffect(() => {
    if (listaCompras.length > 0) {
      localStorage.setItem("listaCompras", JSON.stringify(listaCompras));
    }
  }, [listaCompras]); //useEfect renderiza quando a aplicação re-renderizar && quando o array de dependencias sofrer algum tipo de modificação!

  useEffect(() => {
    if (localStorage.getItem("armazenaCompras") !== null) {
      setListaCompras(JSON.parse(localStorage.getItem("listaCompras")));
    }
  }, []); //renderiza apenas na montagem (quando o usuario der F5 na pagina)

  // Estado para armazenar o valor do item sendo digitado
  const [item, setItem] = useState("");

  // Função para adicionar um item à lista de compras
  const adicionarItem = () => {
    if (item.trim() !== "") {
      // Verifica se o item não está vazio ou contém apenas espaços em branco
      setListaCompras([...listaCompras, item]); // Adiciona o item à lista de compras
      setItem(""); // Limpa o campo de entrada
    }
  };

  const excluirItem = (item) => {
    const novoObj = listaCompras.filter((i) => i !== item);
    setListaCompras(novoObj);
    localStorage.setItem("listaCompras", JSON.stringify(novoObj));
  };//função que remove um item individual da lista

  // const recuperarItem = () => {
  //   setListaCompras(JSON.parse(localStorage.getItem('listaCompras')));
  // }

  const deletarLista = () => {
    localStorage.removeItem("listaCompras");

    let deletarListaTbm = confirm(
      "LocalStorage Limpo! - Deseja apagar a lista que esta sendo exibida tambem?"
    );

    if (deletarListaTbm) {
      setListaCompras([]);
    } else {
    }
  };

  return (
    <div>
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite um item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <button onClick={deletarLista}>Deletar Lista</button>

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>
            {compra} - - - -{" "}
            <a href=" " onClick={() => excluirItem(compra)}>
              Excluir
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
