import { useState } from 'react'
import './PreviosState.scss'

const PreviosState = () => {

    const [users, setUsers] = useState([
        {id: 1, nome: "Brito", age: 31},
        {id: 2, nome: "Alves", age: 21},
        {id: 3, nome: "Soares", age: 11},
        {id: 4, nome: "Veras", age: 41}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        }) 
    }


  return (
    <>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.nome} - {item.age}</li>
            ))}
        </ul>
            <button onClick={deleteRandom}>Delete random</button>
    </>
  )
}

export default PreviosState