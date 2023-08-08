import { useState } from "react"


const Condicional_Render = () => {

    const [X] = useState(true);


  return (
    <>
    {X ? <p>Se x for true eu apareço</p> : <p>Se nao eu apareço</p>}
    
    </>


  )
}

export default Condicional_Render