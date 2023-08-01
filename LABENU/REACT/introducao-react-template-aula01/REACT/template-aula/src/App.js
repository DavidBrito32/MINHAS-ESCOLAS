import logo from "./img/logo.png";
import './App.css';

function App() {

  function onClickBotao(){
    alert('Fui clicado corretamente');
  }

  return (
    <>    
    <div className="container">
        <h1>Aprenda React na Labenu!</h1>
          <div className="logo">
            <img class="Logo" src={logo} alt="logo"/>
          </div>
          <div className="link">
            <a href="https://labenu.com.br" target="_blank">Site da Labenu</a>
          </div>
          <div>
            <button onClick={onClickBotao} className="botao"> Clique aqui! </button>
          </div>
      </div>    
    </>
  );
}

export default App;
