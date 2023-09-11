import { useEffect, useState } from "react";

export default function App() {
  // Estado para armazenar a lista de compras
  const [listaCompras, setListaCompras] = useState(JSON.parse(localStorage.getItem('listaCompras')) || []);

  useEffect(()=>{
    if(listaCompras.length > 0){
      localStorage.setItem('listaCompras', JSON.stringify(listaCompras));
    }
  }, [listaCompras]); //useEfect renderiza quando a aplicação re-renderizar && quando o array de dependencias sofrer algum tipo de modificação!


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
    localStorage.setItem('listaCompras', JSON.stringify(novoObj));
  }
  const recuperarItem = () => {   
    setListaCompras(JSON.parse(localStorage.getItem('listaCompras')));
  }

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
      <button onClick={recuperarItem}>Recuperar Lista</button>

      <ul>
        {listaCompras.map((compra, index) => (
          <li key={index}>{compra} - - - - <a href=" " onClick={() => excluirItem(compra)}>Excluir</a></li>
        ))}
      </ul>
    </div>
  );
}
