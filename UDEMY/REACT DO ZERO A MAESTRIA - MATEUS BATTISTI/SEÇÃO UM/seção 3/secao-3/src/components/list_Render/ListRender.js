import { useState } from 'react'
import './ListRender.scss'

const ListRender = () => {

    const [list] = useState(['Matheus', 'Pedro', 'Josias']);

    const [objetos] = useState([
        {id: 1, nome: 'David', idade: 27},
        {id: 2, nome: 'Amancio', idade: 57},
        {id: 3, nome: 'Pedro', idade: 13},
        {id: 4, nome: 'Iudi', idade: 14},
        {id: 5, nome: 'Maria Antonia', idade: 2}
    ])

  return (
    <>
            <ul>
                {list.map((item, key) => (
                    <li key={key}><strong>{item}</strong></li>
                ))}
            </ul>
            <h1>Iterando em objetos</h1>
            <ul>
                {objetos.map((item) => (
                    <li key={item.id}>Cliente: {item.nome} - Sua idade: {item.idade}</li>
                ))}
            </ul>
    </>
  )
}

export default ListRender;