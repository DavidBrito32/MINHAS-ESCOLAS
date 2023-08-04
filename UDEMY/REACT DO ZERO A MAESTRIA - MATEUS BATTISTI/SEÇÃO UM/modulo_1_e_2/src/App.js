//imports de components
import Container from "./components/Container"
import { useState } from "react";

//import css
import './modulo scss/App.css'

function App() {

  const cars = [
    {id: 1, marca: "Toyota", cor: "Spacial Blue", km: 0, novo: true},
    {id: 2, marca: "Fiat", cor: "Canadian Green", km: 3400, novo: false},
    {id: 3, marca: "Ferrari", cor: "Mistic Red", km: 0,novo: true}
  ]

  return (
    <>{/* ESTE É UM FRAGMENTO TAG USADA PARA INICIAR UM JSX */}
        <header></header>

        <main>
          <p>Estou escrevendo dentro do componente</p>
        <Container children={`Estou dentro do container`}/>

        </main>

        <footer></footer>
    
    </>
  );
}

export default App;
