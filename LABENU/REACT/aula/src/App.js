import './App.css';



function App() {

  const nome = "David Brito";

  const olaMundo = ()=>{
    alert("Olá mundo");
  }



  return (
    <>
      <button onClick={olaMundo} className='meu-nome'>
        clique em mim {nome}
      </button>
    </>
  );
}

export default App;
