import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const listaDeTarefas = [];
  const [novaTarefa, setNovaTarefa] = useState("");

  const [lista, setLista] = useState(listaDeTarefas);
  console.log(lista);

  const listaMapeada = lista.map((item) => (
        <Tarefa>
            <p>{item}</p>
            <RemoveButton onClick={() => removeTarefa(item)}>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
        </Tarefa>
  ));

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa]
    setLista(novaLista)
    setNovaTarefa("")
  };

  const removeTarefa = (valor) => {
    const filtrarItem = lista.filter((item) => {
      return item !== valor;
    });
    setLista(filtrarItem);
    console.log(valor);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {/* <Tarefa>
            <p>Nova tarefa</p>
            <RemoveButton>
              <img src={bin} alt="" width="16px" />
            </RemoveButton>
          </Tarefa> */}
          {listaMapeada}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
