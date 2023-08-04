import { useState } from "react";

const Condicionalrender = () => {

    const [x] = useState(false)

    const [name, setName] = useState("Jõao");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {name === "Ale" || name === "Jõao" ? (<div>O nome é Ale ou Jõao</div>) : (<div>O nome não foi encontrado</div>)}

        <button onClick={() => setName("Jõao")}>Clique aqui</button>

    </div>
  );
}

export default Condicionalrender
