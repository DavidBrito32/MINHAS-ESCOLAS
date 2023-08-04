import { useState } from "react";

const ListRender = () => {
    const [list, setUsers] = useState([
        {
            id: 1,
            nome: "David",
            age: 27
        },
        {
            id: 2,
            nome: "Iudi",
            age: 14
        },
        {
            id: 3,
            nome: "Pedro",
            age: 13
       },
       {
        id: 4,
        nome: "Amancio",
        age: 56
    }
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 5);

        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        })
    }

  return (
    <div>
      <ul>
        {list.map((item) => (<li key={item.id}>{item.nome} tem <strong>{item.age}</strong> anos de idade</li>))}
      </ul>
      <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  )

}

export default ListRender;
