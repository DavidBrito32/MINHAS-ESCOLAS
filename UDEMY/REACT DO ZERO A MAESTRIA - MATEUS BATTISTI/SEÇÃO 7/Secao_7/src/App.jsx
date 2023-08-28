/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

function App() {

  const url = 'http://localhost:3000/products';
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function dados () {
      try{
        let response = await fetch(url);
        let result =  await response.json();
        
        if(result.id !== result.id){
          throw new Error("Dados Não localizados")
        }
        
        setProducts(result);


      }catch (e){
        console.log(`Não foi possivel ver o erro: ${e}` );
      }
      
    }

    dados();
  }, []);


  return (
    <>
        <div className="App">
          <h1>Lista de Produtos</h1>
          <ul>
            {products.map((item) => <li key={item.id}>{item.name} - {item.price}</li>)}
          </ul>
        </div>
    </>
  )
}

export default App
