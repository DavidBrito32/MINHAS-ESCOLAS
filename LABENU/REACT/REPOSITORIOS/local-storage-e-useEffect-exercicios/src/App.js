/* eslint-disable no-self-assign */
import { useEffect, useState } from "react";
import { DivContainer, InputsContainer, ListaDeTarefas, Tarefa } from "./style";
import "boxicons";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [valorDoInput, setValorDoInput] = useState("");
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    if (tarefas.length > 0) {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
  }, [tarefas]);

  useEffect(() => {
    if (localStorage.getItem("tarefas") !== null) {
      setTarefas(JSON.parse(localStorage.getItem("tarefas")));
    }
  }, []);

  const pegarValorDoInput = (event) => {
    setValorDoInput(event.target.value);
  };

  const criarTarefa = (valorDigitado) => {
    const objeto = {
      id: Date.now(),
      texto: valorDigitado,
      completa: false,
    };
    setTarefas([...tarefas, objeto]);
    setValorDoInput("");
  };
  console.log(tarefas);

  const selecionarTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((item) => {
      if (item.id === id) {
        return {...item, completa: !item.completa} // AQUI ELE RETORNOU UM OBJETO DIRETOM FAZENDO SOMENTE UM SPREED OPERATOR DAS PROPRIEDADES QUE JA EXISTIAM NO OBJETO - MODIFICANDO APENAS A PROPRIEDADE COMPLETA (QUE SE NAO EXISTISSE IRIA CRIAR - POREM COMO JA EXISTE ELE IRA APENAS MODIFICAR O CONTEUDO DESTA CHAVE!);
      }else{
        return item 
      }
    });
    setTarefas(tarefasAtualizadas)
  };

  const pegarValorDoSelect = (e) => {
    setFiltro(e.target.value);
  };

  const excluirTask = (index) => {
    const novoValor = tarefas.filter((item) => item !== index);
    setTarefas(novoValor);
    localStorage.setItem("tarefas", JSON.stringify(novoValor));
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <DivContainer>
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={valorDoInput} onChange={pegarValorDoInput} />
        <button onClick={() => criarTarefa(valorDoInput)}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={pegarValorDoSelect}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <ListaDeTarefas>
        {listaFiltrada.map((tarefa) => {
          return (
            <Tarefa key={tarefa.id} cor={tarefa.completa} completa={tarefa.completa}>
              {tarefa.completa ? (
                <box-icon name="check-circle"></box-icon>
              ) : (
                <box-icon type='solid' name='flag-checkered'></box-icon>
              )}{" "}
              {tarefa.texto}{" "}
              <div>
                <box-icon
                  onClick={() => selecionarTarefa(tarefa.id)}
                  name="list-check"
                ></box-icon>
                <box-icon 
                onClick={() => excluirTask(tarefa)}
                name="trash"
                type="solid">
                </box-icon>    
              </div>
            </Tarefa>
          );
        })}
      </ListaDeTarefas>
    </DivContainer>
  );
}

export default App;
