import styles from './MyComponents.modules.css';
import { useState } from 'react';


const MyComponent = () => {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();


    const handleNome = (e) =>{
       setNome(e.target.value);
    }
    console.log(nome)


  return (
    <>
      {/* Criação de forms */}
      <form>
        <div>
            <label htmlFor='name'>Nome:</label>
            <input onChange={handleNome} type="text" name='name' placeholder='Digite seu nome:' />
        </div>
        <button type="button" value='Enviar'>Enviar</button>

        {/* Label envolvendo o input */}

        <label>
        <span>E-mail</span>
        <input type="text"  placeholder='Digite seu E-mail:'/>
        </label>


      </form>
    </>
  )
}

export default MyComponent
