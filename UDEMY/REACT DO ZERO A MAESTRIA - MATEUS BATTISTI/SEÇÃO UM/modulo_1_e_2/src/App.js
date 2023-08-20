//imports de components
import ManageData from './components/ManageData';
//import css
import './modulo scss/App.css'

function App() {

  // const cars = [
  //   {id: 1, marca: "Toyota", cor: "Spacial Blue", km: 0, novo: true},
  //   {id: 2, marca: "Fiat", cor: "Canadian Green", km: 3400, novo: false},
  //   {id: 3, marca: "Ferrari", cor: "Mistic Red", km: 0,novo: true}
  // ]

  return (
    <>{/* ESTE É UM FRAGMENTO TAG USADA PARA INICIAR UM JSX */}
        <ManageData />
    </>
  );
}

export default App;
