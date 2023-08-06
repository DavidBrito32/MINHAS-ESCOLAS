import { useState } from 'react';

import './ManagerData.scss'

const ManagerData = () => {

    let [number, setNumber] = useState(10);

    let someData = 10;

    const novoValor = () => {
        someData = 15
        console.log(someData);
    }

    const novoValor2 = () => {
        setNumber(25);
        console.log(someData);
    }


  return (
            <>
            <div>
                <p>Valor {someData}</p>
                <button onClick={novoValor}>Mudar varor</button>

                <p>Valor {number}</p>
                <button onClick={novoValor2}>Mudar varor</button>
            </div>
        </>
  )
}

export default ManagerData