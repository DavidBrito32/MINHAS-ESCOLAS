import { useState } from "react";

const ManageData = () => {
    let [number, setNumber] = useState(10);
    let someData = 10;
  return (
    <div>
        <p>O valor de {someData}</p>
        <button onClick={() => someData = 15}>Mudar variavel</button>

        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(15)}>Mudar variavel</button>
        </div>

    </div>
  )
}

export default ManageData;
